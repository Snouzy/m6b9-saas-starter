# 📁 Architecture du projet – Fitlinks

Bienvenue dans le monorepo Fitlinks. Ce document vous guide sur la structure du code, les conventions d’architecture Feature-Sliced Design
(FSD) appliquées avec Next.js App Router, et les bonnes pratiques à suivre.

## 🧱 Philosophie générale

Ce projet suit les principes FSD (Feature-Sliced Design) :

- **Focus fonctionnel** (features-driven)
- **Isolation claire des domaines** : `shared`, `entities`, `features`, `widgets`, `app`
- **Cohérence** entre logique métier, UI et data

## 🗂 Structure du dossier `src/`

```bash
├── app/          # Pages, routes et layouts (Next.js App Router)
│   └── (auth-layout)/ # Groupes de layout
src/
├── processes/    # Flows métiers (multi-features)
├── widgets/      # UI composable avec logique (ex: Sidebar, Header)
├── features/     # Unités métier (ex: auth, contact-feedback)
├── entities/     # Représentation des entités du domaine (ex: user, workout)
├── shared/       # Code transverse (UI, lib, config, constants, types)
└── styles/       # Fichiers CSS globaux, thèmes
```

## 🔍 Détail par niveau

### `app/`

- Contient les routes Next.js (app router).
- Un layout représente une UI structurelle (ex: header, sidebar).
- Les pages utilisent les composants des couches `features`, `widgets`, et `entities`.

### `processes/`

- Composition de plusieurs `features` dans un processus métier global.
- Exemple : `registration-flow`, `booking-flow`.

### `widgets/`

- Composants UI riches contenant de la logique métier de haut niveau.
- Exemple : `Sidebar`, `CalendarWidget`.

### `features/`

- Chaque feature est indépendante, isolée et réutilisable.
- Exemple de structure pour une feature `auth` :
  ```bash
  features/
  └── signup/
      ├── ui/     # Composants UI exposés (SignUpForm, AuthButton)
      ├── model/  # Hooks, mutations, logique de formulaire (useSignUp, useLogout)
      ├── lib/    # Fonctions utilitaires liées (display-name, token-helper)
      └── api/    # Actions côté serveur ou appels API liés à auth
  ```

### `shared/`

- Contient tout le code transverse :
  ```bash
  shared/
  ├── lib/        # Fonctions génériques et helpers
  ├── constants/  # Chemins, configs, valeurs globales
  ├── config/     # Fichiers d’intégration (auth, stripe, mail, etc.)
  ├── types/      # Types globaux TypeScript
  └── ui/         # Composants UI design system (Button, Card, Alert…)
  ```

## 🧩 Exemple d’usage des couches (layers)

Une page comme `/auth/signup` :

1.  Utilise `SignUpForm` de `features/auth/ui/`
2.  Qui utilise `useSignUp()` de `features/auth/model/`
3.  Qui appelle `signUpAction()` de `features/auth/api/`
4.  Qui utilise `authClient` de `features/auth/lib/`

## ✅ Bonnes pratiques

- 🔁 **Réutilisabilité** : Les composants `features/` ou `entities/` ne doivent pas connaître `app/`.

- 🔒 **Isolation stricte** : Ne jamais mélanger les rôles de chaque couche. Les dépendances doivent aller des couches supérieures vers les
  couches inférieures (`app` -> `widgets` -> `features` -> `entities` -> `shared`).
- 🗃️ **Nommer clairement** : Préférer des noms explicites comme `SignUpForm`, `useSignUp`, `authClient`, etc.

## 📚 Ressources

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Better Auth](https://github.com/ShellBear/better-auth)
- [React Server](https://react.dev/reference/rsc/server-components)
