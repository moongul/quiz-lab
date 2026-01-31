# quiz-lab Project Guide

> AI-native development with PDCA methodology

## Project Overview

이 프로젝트는 퀴즈/테스트 콘텐츠를 제공하는 웹 애플리케이션입니다.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Database**: SQLite with Drizzle ORM
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   └── test/[slug]/       # Dynamic quiz pages
├── components/            # React components
│   ├── AdSlot.tsx
│   ├── ShareButtons.tsx
│   └── TestClient.tsx
└── lib/
    └── db/                # Database layer
        ├── index.ts       # DB connection
        ├── schema.ts      # Drizzle schema
        └── seed.ts        # Seed data
```

## Coding Conventions

### Naming

| Target | Convention | Example |
|--------|------------|---------|
| Components | PascalCase | `TestClient.tsx` |
| Functions | camelCase | `handleSubmit()` |
| Types | PascalCase | `QuizQuestion` |
| Folders | kebab-case | `test-utils/` |

### Import Order

```typescript
// 1. External
import { useState } from 'react'

// 2. Internal (@/)
import { db } from '@/lib/db'

// 3. Relative
import { helper } from './utils'

// 4. Types
import type { Quiz } from '@/types'
```

---

## PDCA Workflow

이 프로젝트는 PDCA (Plan-Do-Check-Act) 방법론을 사용합니다.

### Document Locations

| Phase | Location |
|-------|----------|
| Plan | `docs/pdca/01-plan/features/` |
| Design | `docs/pdca/02-design/features/` |
| Analysis | `docs/pdca/03-analysis/` |
| Report | `docs/pdca/04-report/` |

### Templates

- [Plan Template](docs/templates/plan.template.md)
- [Design Template](docs/templates/design.template.md)
- [Analysis Template](docs/templates/analysis.template.md)
- [Report Template](docs/templates/report.template.md)

### Workflow Guide

See [PDCA Workflow](docs/PDCA-WORKFLOW.md) for detailed instructions.

### Quick Commands

```
"새 기능 {feature} 계획해줘"    → Plan document 생성
"설계 문서 작성해줘"            → Design document 생성
"갭 분석해줘"                   → Gap Analysis (Check)
"완료 보고서 작성해줘"          → Completion Report
```

---

## Development

### Setup

```bash
npm install
npm run dev
```

### Database

```bash
# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Seed data
npm run db:seed
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```
DATABASE_URL=file:./local.db
```

---

## Task Classification

| Type | Lines | PDCA Required |
|------|-------|---------------|
| Quick Fix | < 10 | No |
| Minor Change | < 50 | Recommended |
| Feature | < 200 | Yes |
| Major Feature | >= 200 | Yes + Split |

---

## Attribution

PDCA workflow adapted from [bkit-claude-code](https://github.com/nunionda/bkit-claude-code) by POPUP STUDIO.
