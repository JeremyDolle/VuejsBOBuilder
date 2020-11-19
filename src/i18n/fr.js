export default {
  app: {
    welcome: 'Bienvenue sur votre BackOffice',
    loading: 'Chargement de l\'application et de ses modules',
    description: {
      post: 'Les articles correspondent aux différentes publications apparaissant sur le site. Vous allez pouvoir créer, éditer, visualiser et supprimer les articles en fonction de vos droits',
      comment: 'Les reactions sont appliquées à des articles. Vous allez pouvoir créer, éditer, visualiser et supprimer les articles en fonction de vos droits',
      user: 'Les utilisateurs sont les personnes inscrites sur le site. Vous allez pouvoir créer, éditer, visualiser et supprimer les articles en fonction de vos droits',
    },
  },
  fields: {
    title: {
      label: 'Titre',
      placeholder: 'Entrez un titre',
    },
    body: {
      label: 'Texte',
      placeholder: 'Entrez un corps de message',
    },
    name: {
      label: 'Nom',
      placeholder: 'Entrez un nom',
    },
    email: {
      label: 'Email',
      placeholder: 'Entrez un email',
    },
    password: {
      label: 'Mot de passe',
      placeholder: 'Entrez un mot de passe',
    },
    postId: {
      label: 'Article',
      placeholder: 'Selectionner un article',
    },
    avatar: {
      label: 'Photo de profile',
      placeholder: 'Selectionner une photo de profile',
    },
    username: {
      label: 'Pseudo',
      placeholder: 'Entrez un pseudo',
    },
    phone: {
      label: 'Numéro de téléphone',
      placeholder: 'Entrez un numéro de téléphone',
    },
    website: {
      label: 'Site internet',
      placeholder: 'Entrez un site internet',
    },
  },
  sidebar: {
    user: {
      label: 'Utilisateurs',
    },
    post: {
      label: 'Articles',
    },
    comment: {
      label: 'Réactions',
    },
  },
  pages: {
    list: {
      title: 'Liste des {entity}',
    },
    create: {
      title: 'Formulaire de création des {entity}',
    },
    edit: {
      title: 'Formulaire d\'édition des {entity}',
    },
    notFound: {
      title: 'La page que vous cherchez n\'existe pas',
    },
  },
  toasts: {
    error: 'Erreur',
    create: {
      title: 'Création',
      success: 'L\'entité à bien été crée',
      error: 'Erreur pendant la création',
    },
    edit: {
      title: 'Mise à jour',
      success: 'L\'entité à bien été mise à jour',
      error: 'Erreur pendant la mise à jour',
    },
    delete: {
      title: 'Suppression',
      success: 'L\'entité à bien été supprimée',
      error: 'Erreur pendant la suppression',
    },
  },
  actions: {
    not_allowed: 'Vous n\'avez pas les permissions',
    connect: 'Se connecter',
    create: 'Créer',
    edit: 'Editer',
    delete: 'Supprimer',
    cancel: 'Annuler',
    deleteConfirm: {
      title: 'Confimez-vous la suppression ?',
      description: 'Etes-vous certain de vouloir supprimer cette ligne ? Une fois supprimée, elle ne pourra plus être récupérée.',
    },
  },
}
