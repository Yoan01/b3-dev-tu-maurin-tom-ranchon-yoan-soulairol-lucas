Les tests present dans ce git sont des tests unitaires, qui permettent de vérifier le bon fonctionnement d'une unité de code spécifique, dans ce cas, les fonctions de la classe Calculatrice.

Pour utiliser ces tests, vous devez d'abord avoir installé les modules chai et mocha, qui sont des outils de test pour Node.js. Vous pouvez les installer en utilisant la commande npm install --save-dev chai mocha.

Ensuite, pour exécuter ces tests, vous pouvez utiliser la commande mocha dans votre terminal, en vous situant dans le répertoire où se trouvent vos fichiers de test. Cette commande exécutera tous les tests présents dans le répertoire et vous indiquera si les tests sont passés ou non.

Les tests sont écrits en utilisant la syntaxe describe et it. La fonction describe permet de décrire un groupe de tests liés, tandis que la fonction it décrit un test individuel. La fonction expect de la librairie chai permet de vérifier si la valeur renvoyée par la fonction testée correspond à ce que l'on attend. Si c'est le cas, le test est considéré comme réussi, sinon il est considéré comme échoué.

Il est important de noter que l'exécution de ces tests ne garantit pas à 100% que votre code est correct, mais cela peut vous aider à détecter des erreurs et à s'assurer que votre code fonctionne correctement dans différents cas.

Scénario: Puissances entre deux nombre
Étant donné que j'ai saisi "10" dans la calculatrice
Et que j'ai saisi "2" dans la calculatrice
Lorsque je presse le bouton "="
Alors le résultat affiché doit être "100"

Scénario: Raccine carré d'un nombres
Étant donné que j'ai saisi "36" dans la calculatrice
Lorsque je presse le bouton "RACCINE CARRE"
Alors le résultat affiché doit être "6"

Scénario: Additioner deux nombres
Étant donné que j'ai saisi "48" dans la calculatrice
Et que j'ai saisi "9" dans la calculatrice
Lorsque je presse le bouton "+"
Alors le résultat affiché doit être "57"

Scénario: Soustraire deux nombres
Étant donné que j'ai saisi "48" dans la calculatrice
Et que j'ai saisi "9" dans la calculatrice
Lorsque je presse le bouton "-"
Alors le résultat affiché doit être "39"

Scénario: Multiplier deux nombres
Étant donné que j'ai saisi "48" dans la calculatrice
Et que j'ai saisi "2" dans la calculatrice
Lorsque je presse le bouton "*"
Alors le résultat affiché doit être "96"


Scénario: Diviser deux nombres
Étant donné que j'ai saisi "5" dans la calculatrice
Et que j'ai saisi "10" dans la calculatrice
Lorsque je presse le bouton "/"
Alors le résultat affiché doit être "0.5"


Scénario: Pourcentage deux nombres
Étant donné que j'ai saisi "10" dans la calculatrice
Et que j'ai saisi "2" dans la calculatrice
Lorsque je presse le bouton "%"
Alors le résultat affiché doit être "500"

