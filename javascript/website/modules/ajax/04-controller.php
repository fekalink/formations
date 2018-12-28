<?php
/**
*Ceci est une mini API. Ce fichier est appelé Controleur
*car c'est lui qui gère les requetes et réponses
*/


class Status {

  public const OK = 0;
  public const KO = 1;

  private $code;
  private $message;

  public function __construct($message="") {
    $this->code = self::OK;
    $this->message = $message;
  }

  public function setMessage($message) {
    $this->message = $message;
  }

  public function getMessage($message) {
    return $this->message;
  }

  public function setCode($code) {
    $this->code = $code;
  }

  public function getCode() {
    return $this->code;
  }

}

class APIRequest
{
    protected static $instance;
    protected $parameters;

    private function __construct() {
      $this->parameters =  $_GET;
    }

    public static function getInstance() {
      if (empty(self::$instance)) {
        self::$instance = new APIRequest();
      }
      return self::$instance;
    }

    public function get($paramName, $defaultValue="") {
      $value = $this->getParam($paramName);
      if (empty($value)) {
        $value = $defaultValue;
      }
      return $value;
    }

    protected function getParam($paramName) {
      if (!empty($this->parameters[$paramName])) {
        return $this->parameters[$paramName];
      }
    }

}

//unused
$availableActions = [
   "listeVilles" => true,
   "listeUsers" => true,
];


//l'URL doit contenir la paramètre action (http://dev.www.musicband.org/04-controller.php?action=listeUsers)

$status = new Status();
$api = APIRequest::getInstance();
$action = $api->get('action');

switch ($action) {
  //première méthode non robuste
  case 'listeVilles':
    $content = '
    {
      "villes": [
        { "name": "Mulhouse", "value": "mulhouse", "zipcode": 68000, "logo":"image/mulhouse.png" },
        { "name": "Grenoble", "value": "grenoble", "zipcode": 38000, "logo":"image/gre.png" },
        { "name": "Paris", "value": "paris", "zipcode": 75000,"logo":"image/paris.png" },
        { "name": "Lyon", "value": "lyon", "zipcode": 69000, "logo":"image/lyon.png" }
      ]
    }
    ';
    $status->setMessage("OK");
  break;

  //deuxième méthode robuste
  case 'listeUsers':
    $content = [
        "users" => [
             [
              "name" => "Garibaldi",
              "forname" => "Michel",
              "birthdate" => "1957/06/12",
              "city" => "Mulhouse",
            ],
            [
              "name" => "Hiboux",
              "forname" => "Antoine",
              "birthdate" => "1992/01/06",
              "city" => "Grenoble",
            ]
        ],
    ];

    $content = json_encode($content);
    $status->setMessage("OK");
  break;

  default:
    $content["message"] = "Action non reconnue";
    $status->setCode(Status::KO);
    $status->setMessage("Unknwon Action");
    $content = json_encode($content);
  break;
}

header('Content-type: application/json');
header('X-JSON-ERROR: ' + json_encode($status));
echo $content;
