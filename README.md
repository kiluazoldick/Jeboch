# JeBoch - Plateforme Éducative Frontend 🎓

![JeBoch Screenshot](https://github.com/kiluazoldick/Jeboch/blob/main/dashboard.png) 

Un prototype frontend pour une plateforme d'éducation inspirée d'OpenClassroom. **Ce projet est 100% frontend** - aucune interaction backend ou système d'authentification n'est implémenté.

## 🎨 Palette de Couleurs
- Noir: `#000000`
- Rouge: `#ED1C24`
- Blanc: `#FFFFFF`

## 📚 Pages Disponibles
| Page | Description | Lien |
|------|-------------|------|
| 🏠 **Landing Page** | Page d'accueil principale | `/` |
| 📝 **Inscription** | Formulaire de création de compte | `/inscription` |
| 🔑 **Connexion** | Page de connexion utilisateur | `/connexion` |
| ❓ **Mot de passe oublié** | Réinitialisation du mot de passe | `/mot-de-passe-oublie` |
| 💳 **Abonnement** | Choix du plan d'abonnement | `/abonnement` |
| 🚀 **Onboarding** | Introduction à la plateforme | `/onboarding` |
| 📊 **Dashboard** | Tableau de bord principal | `/dashboard` |
| 📖 **Livres** | Bibliothèque de ressources | `/livres` |
| 📹 **Vidéos** | Contenus vidéos éducatifs | `/videos` |
| 💬 **Forums** | Espace de discussion | `/forums` |
| 👤 **Espace Compte** | Gestion du profil | `/compte` |
| 🛤️ **Mon Parcours** | Suivi de progression | `/parcours` |
| ⚙️ **Paramètres** | Préférences utilisateur | `/parametres` |
| 👋 **Déconnexion** | Page de confirmation | `/deconnexion` |

## 🚀 Installation & Exécution

1. **Cloner le dépôt**:
```bash
git clone https://github.com/kiluazoldick/Jeboch.git
```

2. **Installer les dépendances**:
```bash
npm install
# ou
yarn install
```

3. **Démarrer l'application**:
```bash
npm run dev
# ou
yarn dev
```

4. **Accéder à l'application**:
```
http://localhost:3000
```

## 📁 Structure des Fichiers
```plaintext
src/
├── app/
│   ├── page.tsx                
│   ├── inscription/
│   │   └── page.tsx
│   ├── connexion/
│   │   └── page.tsx
│   ├── mot-de-passe-oublie/
│   │   └── page.tsx
│   ├── abonnement/
│   │   └── page.tsx
│   ├── onboarding/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── livres/
│   │   └── page.tsx
│   ├── videos/
│   │   └── page.tsx
│   ├── forums/
│   │   └── page.tsx
│   ├── compte/
│   │   └── page.tsx
│   ├── parcours/
│   │   └── page.tsx
│   ├── paramètres/
│   │   └── page.tsx
│   └── deconnexion/
│       └── page.tsx
```

## ⚠️ Notes Importantes
- 🔒 **Aucun système backend** - Purement frontend/statique
- 🚫 **Pas d'authentification réelle** - Navigation simulée
- 🎨 **Styles inline** - Utilisation exclusive de `className` Tailwind
- 📱 **Design responsive** - Adapté à tous les appareils

## 🛠 Technologies Utilisées
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Heroicons

## 📄 Licence
Ce projet est sous licence [MIT](LICENSE).

---

**JeBoch** © 2025 - Plateforme d'éducation fictive pour démonstration frontend
