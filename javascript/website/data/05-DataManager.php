<?php
/**
 * Permet d'accéder aux données
 * @Todo cette classe a trop de responsabilité : lesquelles ?
 */
class DataManager {

  protected $dataFiles = [];
  protected $documentRoot = "";

  /**
   * @todo la liste des fichiers devrait être dans un unique fichier de configuration
   */
  public function __construct() {
      $this->dataFiles["users"] = "data/05-users.json";
      $this->dataFiles["products"] = "data/05-products.json";
      $this->dataFiles["cities"] = "data/05-cities.json";
      $this->documentRoot = $_SERVER['DOCUMENT_ROOT'];
  }

  public function getData($name) {
      if ( empty($this->dataFiles[$name]) ) {
        throw new Exception("Data file not found for {$name}");
      }
      $fileName = $this->dataFiles[$name];
      return $this->readDataFromFile($fileName);
  }

  public function saveData($data, $name) {
    if ( empty($this->dataFiles[$name]) ) {
      throw new Exception("Data file not found for {$name}");
    }
    $fileName = $this->dataFiles[$name];
    $this->writeDataToFile(__DIR__."/../" . $fileName, $data);
  }

  protected function writeDataToFile($fileName, $data) {
    file_put_contents($fileName, json_encode($data));
  }

  protected function readDataFromFile($fileName) {
        $json = file_get_contents($this->documentRoot . '/' . $fileName);
        $dataArray  = json_decode($json);
        return $dataArray;
  }

}
