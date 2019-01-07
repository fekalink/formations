<?php
/**
*Ceci est une mini API. Ce fichier est appelé Controleur
*car c'est lui qui gère les requetes et réponses
* Les données sont chargées par l'utilsation d'une classe prévue à cet effet
*/

require_once($_SERVER["DOCUMENT_ROOT"] . "/data/05-DataManager.php");

class UserValidator {

     public function validate($user) {
      if (empty($user->email) || empty($user->name)) {
        throw new Exception("Empty field value email or name are missing");
      }
      return true;
     }
}

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
    protected $postData;

    private function __construct() {
      $this->parameters =  $_GET;
      $this->postData = $_POST;
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

    public function getPostData() {
      return $this->postData;
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
$validator = new UserValidator();
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

  case 'updateUser':
    $users = $dm->getData('users');
    $postData = $api->getPostData();
    $userId = $postData["userId"];
    foreach( $users->users as $key=>$user ) {

      if ($user->id == $userId) {
        $user->name = $postData['name'];
        $user->forname = $postData['forname'];
        $user->city = $postData['city'];
        $user->age = $postData['age'];
        $user->postalcode = $postData['postalcode'];
        $user->email = $postData['email'];
        $users->users[$key] = $user;
        break;
      }
    }
    try {
      $validator->validate($user);
      $dm->saveData($users, "users");
      $content = $dm->getData("users");
      $status->setMessage("OK");
    } catch(Exception $e) {
      $content["error"] = $e->getMessage();
    }
  break;

  case "createUser":
    $users = $dm->getData('users');
    $postData = $api->getPostData();
    $user = new StdClass();
    $user->id = count($users->users);
    $user->name = $postData['name'];
    $user->forname = $postData['forname'];
    $user->city = $postData['city'];
    $user->age = $postData['age'];
    $user->postalcode = $postData['postalcode'];
    $user->email = $postData['email'];
    $users->users[] = $user;
    try {
      $validator->validate($user);
      $dm->saveData($users, "users");
      $content = $dm->getData("users");
      $status->setMessage("OK");
    } catch(Exception $e) {
      $content["error"] = $e->getMessage();
    }
  break;

  default:
    $content["message"] = "Action non reconnue";
    $status->setCode(Status::KO);
    $status->setMessage("Unknown Action");
  break;
}

header('Content-type: application/json');
header('cache-control: no-cache, must-revalidate, post-check=0, pre-check=0');
header('cache-control', 'max-age=0');
//xhr.setRequestHeader('expires', '0');
//xhr.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
header('pragma', 'no-cache');
//header('X-Json-Error: ' + json_encode($status));
echo json_encode($content);
