<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    private UserPasswordHasherInterface $hasher;
    const ROLES = [
        "ROLE_ADMIN" => "ROLE_ADMIN",
        "ROLE_SUPER_ADMIN" => "ROLE_SUPER_ADMIN",
    ];

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('User')
            ->setEntityLabelInPlural('User')
            ->setSearchFields(['id', 'email', 'roles', 'apiToken']);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $user): void
    {
        $this->updateUserPassword($user);
        $user->setApiToken($user->getEmail());
        parent::persistEntity($entityManager, $user);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $user): void
    {
        $this->updateUserPassword($user);
        parent::persistEntity($entityManager, $user);
    }

    public function configureFields(string $pageName): iterable
    {
        $email = TextField::new('email');
        $password = TextField::new('plainPassword', 'Password');
        $notes = AssociationField::new('notes');
        $id = IntegerField::new('id', 'ID');
        $roles = ChoiceField::new('roles')->setChoices(self::ROLES)->allowMultipleChoices();

        if (Crud::PAGE_INDEX === $pageName) {
            return [$id, $email, $notes];
        } elseif (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $email, $roles, $password, $notes];
        } elseif (Crud::PAGE_NEW === $pageName) {
            return [$email, $password, $notes];
        } elseif (Crud::PAGE_EDIT === $pageName) {
            return [$email, $password, $roles];
        }
    }

    /**
     * @param $user
     */
    private function updateUserPassword($user): void
    {
        if ($user->getPlainPassword()) {
            $encodedPassword = $this->hasher->hashPassword($user, $user->getPlainPassword());
            $user->setPassword($encodedPassword);
        }
    }
}
