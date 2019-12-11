<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");
      $name = $_POST['name'];
      $email = $_POST['email'];
      $contents = $_POST['contents'];
      if(mb_send_mail("2019shintaiken@gmail.com", $name, $contents, $email)){
        echo "送信しました。";
      } else {
        echo "送信に失敗しました。";
      };
    ?>
  </body>
  <a href="../index.html">トップに戻る</a>
</html>
