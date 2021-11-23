<?php

namespace App\Repository;

use App\Entity\UsedEquipment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UsedEquipment|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsedEquipment|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsedEquipment[]    findAll()
 * @method UsedEquipment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsedEquipmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsedEquipment::class);
    }

    // /**
    //  * @return UsedEquipment[] Returns an array of UsedEquipment objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UsedEquipment
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
