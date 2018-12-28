<?php
/**
*Ceci est une mini API. Ce fichier est appelé Controleur
*car c'est lui qui gère les requetes et réponses
* Les données sont chargées par l'utilsation d'une classe prévue à cet effet
*/

require_once($_SERVER["DOCUMENT_ROOT"] . "/data/05-DataManager.php");

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


//l'URL doit contenir la paramètre action (http://dev.www.musicband.org/04-controller.php?action=listeUsers)
$status = new Status();
$api = APIRequest::getInstance();
$action = $api->get('action');

$dm = new DataManager();

switch ($action) {

  case 'listeVilles':
    $content = $dm->getData('cities');
    $status->setMessage("OK");
  break;

  case 'listeUsers':
    $content = $dm->getData('users');
    $status->setMessage("OK");
  break;

  case 'listeProduits':
    $content = $dm->getData('products');
    $status->setMessage("OK");
  break;

  default:
    $content["message"] = "Action non reconnue";
    $status->setCode(Status::KO);
    $status->setMessage("Unknown Action");
  break;
}

header('Content-type: application/json');
header('X-Json-Error: ' + json_encode($status));
echo json_encode($content);
