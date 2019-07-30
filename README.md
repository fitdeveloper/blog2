
Cette application contient : 
- un service qui stockera l'array des posts et pourra les émettre sous forme de Subject — le service permettra également l'ajout d'un nouveau post et la suppression d'un post existant
- un bouton "Supprimer post" sur chaque PostListItemComponent
- un nouveau component, NewPostComponent, qui comportera un formulaire (méthode template ou réactive au choix) qui permettra à l'utilisateur d'entrer le titre et le contenu d'un nouveau post — ce nouveau post sera ensuite créé et ajouté au service, et l'utilisateur sera redirigé vers la liste des posts
- un menu de navigation en haut (avec le routing correspondant), permettant de naviguer vers la liste des posts (/posts) et vers le formulaire (/new) (le path vide sera redirigé vers le path /posts) — le lien du menu correspondant à la route active comportera la classe active
    faire en sorte que le changement du nombre de loveIts soit enregistré dans le service
	
Cette application est développée à l'aide de bootstrap 4 

quelque écran de la réalisation de ce projet. 

List des postes vides : 

![List des postes vides](/images/listVidePosts.PNG)

Formulaire Nouveau poste : 

List des postes : 

Les buttons du trie : 

Les buttons du loveIts : 
