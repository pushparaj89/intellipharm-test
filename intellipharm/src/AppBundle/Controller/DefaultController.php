<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Members;
use Doctrine\ORM\EntityManager;


class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     *
     * @Method("GET")
     *
     * @param  Request $request
     * @return JsonResponse
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function indexAction(Request $request) : JsonResponse
    {
        /** @var \AppBundle\Model\MembersModel $membersModel */
        //   $membersModel = $this->get('app.members_model');
        //  $members = $membersModel->getMembers();
//Need to push this code to model using above


        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();
        $qb = $qb
            ->select('m')
            ->from('AppBundle:Members', 'm');

         if($request->query->get('firstname')) {
             $qb->where('m.firstname = :firstname');
             $qb->setParameter('firstname',  $request->query->get('firstname'));
         }
         if($request->query->get('surname')) {
             $qb->andWhere('m.surname = :surname');
             $qb->setParameter('surname',  $request->query->get('surname'));
         }
        if($request->query->get('email')) {
            $qb->andWhere('m.email = :email');
            $qb->setParameter('email',  $request->query->get('email'));
        }
       // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        $queryBuilder =  $qb->getQuery()->getArrayResult();
//        $http_response_header
//        $queryBuilder->headers->set('Access-Control-Allow-Origin', 'http://localhost:3000');
        $response = new JsonResponse($queryBuilder, Response::HTTP_OK);
        $response->sendHeaders('Access-Control-Allow-Origin: *');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;

    }
}
