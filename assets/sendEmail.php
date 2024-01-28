<?php
/*
Run:
*/
require 'vendor/autoload.php';
use \Mailjet\Resources;
$mj = new \Mailjet\Client(getenv('181bfff16014ac486e2409ad2968d0b9'), getenv('2734b2b82d53fda2dac83eedeb9b850c'),true,['version' => 'v3.1']);

// if(!empty($_POST["submit"])){

// }




$body = [
    'Messages' => [
        [
            'From' => [
                'Email' => "contacts@digitalstorm.site",
                'Name' => "Me"
            ],
            'To' => [
                [
                    'Email' => "federicogiudici14@gmail.com",
                    'Name' => "You"
                ]
            ],
            'Subject' => "TEST EMAIL WITH Mailjet",
            'TextPart' => "Greetings from Mailjet!",
            'HTMLPart' => "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
        ]
    ]
];
$response = $mj->post(Resources::$Email, ['body' => $body]);
$response->success() && var_dump($response->getData());
?>