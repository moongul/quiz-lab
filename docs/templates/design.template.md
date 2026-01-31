# {feature} Design Document

> **Summary**: {한 줄 설명}
>
> **Project**: {project}
> **Author**: {author}
> **Date**: {YYYY-MM-DD}
> **Status**: Draft
> **Planning Doc**: [{feature}.plan.md](../01-plan/features/{feature}.plan.md)

---

## 1. Overview

### 1.1 Design Goals

{이 설계가 달성하고자 하는 기술적 목표}

### 1.2 Design Principles

- {원칙 1: 예: Single Responsibility Principle}
- {원칙 2: 예: 확장 가능한 아키텍처}
- {원칙 3}

---

## 2. Architecture

### 2.1 Component Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Server    │────▶│  Database   │
│  (Browser)  │     │   (API)     │     │ (Storage)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

### 2.2 Data Flow

```
User Input → Validation → Business Logic → Data Storage → Response
```

### 2.3 Dependencies

| Component | Depends On | Purpose |
|-----------|-----------|---------|
| {Component A} | {Component B} | {Purpose} |

---

## 3. Data Model

### 3.1 Entity Definition

```typescript
// {Entity name}
interface {Entity} {
  id: string;           // Unique identifier
  createdAt: Date;      // Creation timestamp
  updatedAt: Date;      // Last update timestamp
  // Additional fields...
}
```

### 3.2 Entity Relationships

```
[User] 1 ──── N [Post]
   │
   └── 1 ──── N [Comment]
```

### 3.3 Database Schema (if applicable)

```sql
CREATE TABLE {table_name} (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 4. API Specification

### 4.1 Endpoint List

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | /api/{resource} | List all | Required |
| GET | /api/{resource}/:id | Get detail | Required |
| POST | /api/{resource} | Create | Required |
| PUT | /api/{resource}/:id | Update | Required |
| DELETE | /api/{resource}/:id | Delete | Required |

### 4.2 Detailed Specification

#### `POST /api/{resource}`

**Request:**
```json
{
  "field1": "string",
  "field2": "number"
}
```

**Response (201 Created):**
```json
{
  "id": "string",
  "field1": "string",
  "field2": "number",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

**Error Responses:**
- `400 Bad Request`: 입력 유효성 검사 실패
- `401 Unauthorized`: 인증 필요
- `409 Conflict`: 중복 데이터

---

## 5. UI/UX Design (if applicable)

### 5.1 Screen Layout

```
┌────────────────────────────────────┐
│  Header                            │
├────────────────────────────────────┤
│                                    │
│  Main Content Area                 │
│                                    │
├────────────────────────────────────┤
│  Footer                            │
└────────────────────────────────────┘
```

### 5.2 User Flow

```
Home → Login → Dashboard → Use Feature → View Results
```

### 5.3 Component List

| Component | Location | Responsibility |
|-----------|----------|----------------|
| {ComponentA} | src/components/ | {Role} |

---

## 6. Error Handling

### 6.1 Error Code Definition

| Code | Message | Cause | Handling |
|------|---------|-------|----------|
| 400 | Invalid input | 입력 오류 | 클라이언트에서 재입력 요청 |
| 401 | Unauthorized | 인증 실패 | 로그인 페이지로 리다이렉트 |
| 404 | Not found | 리소스 없음 | 404 페이지 표시 |
| 500 | Internal error | 서버 오류 | 에러 로깅 및 사용자에게 알림 |

### 6.2 Error Response Format

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "User-friendly message",
    "details": {}
  }
}
```

---

## 7. Security Considerations

- [ ] 입력 유효성 검사 (XSS, SQL Injection 방지)
- [ ] 인증/인가 처리
- [ ] 민감 데이터 암호화
- [ ] HTTPS 강제
- [ ] Rate Limiting

---

## 8. Test Plan

### 8.1 Test Scope

| Type | Target | Tool |
|------|--------|------|
| Unit Test | Business logic | Jest/Vitest |
| Integration Test | API endpoints | Supertest |
| E2E Test | User scenarios | Playwright |

### 8.2 Test Cases (Key)

- [ ] Happy path: {description}
- [ ] Error scenario: {description}
- [ ] Edge case: {description}

---

## 9. Clean Architecture

### 9.1 Layer Structure

| Layer | Responsibility | Location |
|-------|---------------|----------|
| **Presentation** | UI components, hooks, pages | `src/components/`, `src/hooks/`, `src/app/` |
| **Application** | Use cases, services, business logic | `src/services/`, `src/features/*/hooks/` |
| **Domain** | Entities, types, core business rules | `src/types/`, `src/domain/` |
| **Infrastructure** | API clients, DB, external services | `src/lib/`, `src/api/` |

### 9.2 Dependency Rules

```
┌─────────────────────────────────────────────────────────────┐
│                    Dependency Direction                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Presentation ──→ Application ──→ Domain ←── Infrastructure│
│                          │                                  │
│                          └──→ Infrastructure                │
│                                                             │
│   Rule: Inner layers MUST NOT depend on outer layers        │
│         Domain is independent (no external dependencies)    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 9.3 This Feature's Layer Assignment

| Component | Layer | Location |
|-----------|-------|----------|
| {ComponentA} | Presentation | `src/components/{feature}/` |
| {ServiceA} | Application | `src/services/{feature}.ts` |
| {TypeA} | Domain | `src/types/{feature}.ts` |
| {ApiClient} | Infrastructure | `src/lib/api/{feature}.ts` |

---

## 10. Coding Convention Reference

### 10.1 Naming Conventions

| Target | Rule | Example |
|--------|------|---------|
| Components | PascalCase | `UserProfile`, `LoginForm` |
| Functions | camelCase | `getUserById()`, `handleSubmit()` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT`, `API_BASE_URL` |
| Types/Interfaces | PascalCase | `UserProfile`, `ApiResponse` |
| Files (component) | PascalCase.tsx | `UserProfile.tsx` |
| Files (utility) | camelCase.ts | `formatDate.ts` |
| Folders | kebab-case | `user-profile/`, `auth-provider/` |

### 10.2 Import Order

```typescript
// 1. External libraries
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

// 2. Internal absolute imports
import { Button } from '@/components/ui'
import { userService } from '@/services/user'

// 3. Relative imports
import { useLocalState } from './hooks'

// 4. Type imports
import type { User } from '@/types'

// 5. Styles
import './styles.css'
```

---

## 11. Implementation Guide

### 11.1 File Structure

```
src/
├── features/{feature}/
│   ├── components/
│   ├── hooks/
│   ├── api/
│   └── types/
```

### 11.2 Implementation Order

1. [ ] 데이터 모델 정의
2. [ ] API 구현
3. [ ] UI 컴포넌트 구현
4. [ ] 통합 및 테스트

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | {date} | Initial draft | {author} |
