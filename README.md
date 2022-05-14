# Anti-Sutom
site web qui permet de résoudre Sutom


Dans le jeu, les lettres de l'alphabet sont divisé en 4 sous parties :
- Les lettres déjà trouvés : celles-ci sont en ```rouge```. On connait la lettre qui se place à l'emplacement x.
- les lettres connus : celle-ci sont en ```jaune```. On sait que la lettre est dans le mot, mais nous ne connaissons pas l'endroit exacte de cette lettre, mais nous savons au minimum 1 place à laquel elle est n'est surement pas.
- les lettres absentes : celle-ci ne sont pas colorié (ou en ```bleu```. on sait juste qu'elle ne sont pas dans le mot (attention quand la lettre est mise plusieurs fois, elle peut-être la première fois en jaune puis ca deuxième occurence n'est pas colorié si le réel mot ne contient qu'une seul fois la lettre).
- les lettres inconnus : elles n'ont pas encore été testé donc elles sont supposé comme encore valable jusqu'à preuve du contraire.


Pour utilisé le site à son plein potentiel, il faut suivre l'ordre suivant : 
lorsque l'on a testé un mot, on note en premier dans le site quels lettres ont été bien trouvé (en ```rouge```), puis ensuite on note les lettres qui sont maintenant connu (en ```jaune```), et enfin seulement on note quels lettres ne sont pas dans le mots (en ```bleu```). En le faisant dans ce sens là, vous pouvez trouver le mots en un nombre d'essai minimal puisque le site ne vous propose que les mots respectants **toutes** les contraintes.

Note : En utilisant le site dans le bon ordre d'enregistrement des lettres, vous pouvez bien évidemment noté lettres déjà plusieurs fois présentes dans le mot comme bon vous semble. Par exemple si votre mot possède un "E" seulement, vous pouvez noter en premier la lettre "E" comme forcément présente, puis noté cette même lettre "E" dans lettre Impossible pour faire comprendre au site qu'il n'y a forcément qu'un seul "E" dans ce mot, pas plus pas moins.
