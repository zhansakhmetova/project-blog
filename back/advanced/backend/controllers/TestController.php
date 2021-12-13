<?php


namespace console\controllers;


use common\models\User;
use yii\console\Controller;

class TestController extends Controller
{
    public function actionCreateUser($username, $password) {
        $user = new User();
        $user->username = $username;
        $user->setPassword($password);
        $user->generateAuthKey();
        $user->status = User::STATUS_ACTIVE;
        $user->save();
        var_dump($user->errors);
    }
}