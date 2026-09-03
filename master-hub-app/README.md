# Master Hub

Master Hub Phase 1 is a premium, responsive personal operating dashboard built with Next.js 16 and React 19. It combines an Action Center, project pulse, life-area navigation, nested folders, alerts, tools, and quick capture in one keyboard-friendly dark interface.

## Features

- Editable D (work) and P (personal) actions with completion, importance stars, deletion confirmation, search, validation, and empty states
- Responsive sidebar for Work, Personal, Financial, Health, Relationships, Knowledge, Alerts, Admin tools, projects, and nested folders
- Notification panel, overview metrics, project progress, focus card, and external Job Quote Calculator shortcut
- Versioned localStorage behind the replaceable StorageAdapter in src/lib/hub-data.ts
- Accessible labels, keyboard focus, Ctrl/Cmd+K search shortcut, Escape dismissal, and reduced-motion support

## Getting started

Copy .env.example to .env.local if future integrations require configuration, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Phase 1 stores data only in the browser under master-hub:data. Clearing site data restores the seeded dashboard.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

Tests cover persistence fallback/versioning and the primary search, capture, validation, importance, and delete flows.
