# {feature} Analysis Report

> **Analysis Type**: Gap Analysis / Code Quality / Performance Analysis
>
> **Project**: {project}
> **Analyst**: {author}
> **Date**: {YYYY-MM-DD}
> **Design Doc**: [{feature}.design.md](../02-design/features/{feature}.design.md)

---

## 1. Analysis Overview

### 1.1 Analysis Purpose

{이 분석을 수행하는 목적}

### 1.2 Analysis Scope

- **Design Document**: `docs/pdca/02-design/features/{feature}.design.md`
- **Implementation Path**: `src/features/{feature}/`
- **Analysis Date**: {date}

---

## 2. Gap Analysis (Design vs Implementation)

### 2.1 API Endpoints

| Design | Implementation | Status | Notes |
|--------|---------------|--------|-------|
| POST /api/{resource} | POST /api/{resource} | ✅ Match | |
| GET /api/{resource}/:id | GET /api/{resource}/:id | ✅ Match | |
| - | POST /api/{resource}/bulk | ⚠️ Missing in design | Added in impl |
| DELETE /api/{resource}/:id | - | ❌ Not implemented | Needs impl |

### 2.2 Data Model

| Field | Design Type | Impl Type | Status |
|-------|-------------|-----------|--------|
| id | string | string | ✅ |
| email | string | string | ✅ |
| createdAt | Date | Date | ✅ |
| metadata | - | object | ⚠️ Missing in design |

### 2.3 Component Structure

| Design Component | Implementation File | Status |
|------------------|---------------------|--------|
| {ComponentA} | src/components/{ComponentA}.tsx | ✅ Match |
| {ComponentB} | - | ❌ Not implemented |

### 2.4 Match Rate Summary

```
┌─────────────────────────────────────────────┐
│  Overall Match Rate: ___%                    │
├─────────────────────────────────────────────┤
│  ✅ Match:          __ items (__%)           │
│  ⚠️ Missing design:  __ items (__%)           │
│  ❌ Not implemented:  __ items (__%)           │
└─────────────────────────────────────────────┘
```

---

## 3. Code Quality Analysis

### 3.1 Complexity Analysis

| File | Function | Complexity | Status | Recommendation |
|------|----------|------------|--------|----------------|
| {service}.ts | processData | 15 | ⚠️ High | Split function |
| utils.ts | formatDate | 3 | ✅ Good | - |

### 3.2 Code Smells

| Type | File | Location | Description | Severity |
|------|------|----------|-------------|----------|
| Long function | api.ts | L45-120 | 75 lines (recommended: <50) | 🟡 |
| Duplicate code | helpers.ts | L10, L45 | Same logic repeated | 🟡 |
| Magic number | config.ts | L23 | Hardcoded number | 🟢 |

### 3.3 Security Issues

| Severity | File | Location | Issue | Recommendation |
|----------|------|----------|-------|----------------|
| 🔴 Critical | auth.ts | L42 | Hardcoded secret | Move to env var |
| 🟡 Warning | api.ts | L15 | Missing input validation | Add validation |
| 🟢 Info | - | - | - | - |

---

## 4. Test Coverage

### 4.1 Coverage Status

| Area | Current | Target | Status |
|------|---------|--------|--------|
| Statements | __% | 80% | ✅/❌ |
| Branches | __% | 75% | ✅/❌ |
| Functions | __% | 80% | ✅/❌ |
| Lines | __% | 80% | ✅/❌ |

### 4.2 Uncovered Areas

- `src/features/{feature}/handlers/errorHandler.ts`
- `src/features/{feature}/utils/parser.ts`

---

## 5. Clean Architecture Compliance

### 5.1 Layer Dependency Verification

| Layer | Expected Dependencies | Actual Dependencies | Status |
|-------|----------------------|---------------------|--------|
| Presentation | Application, Domain | {actual imports} | ✅/❌ |
| Application | Domain, Infrastructure | {actual imports} | ✅/❌ |
| Domain | None (independent) | {actual imports} | ✅/❌ |
| Infrastructure | Domain only | {actual imports} | ✅/❌ |

### 5.2 Dependency Violations

| File | Layer | Violation | Recommendation |
|------|-------|-----------|----------------|
| `components/UserList.tsx` | Presentation | Imports `@/lib/api` directly | Use service hook instead |
| `services/user.ts` | Application | Imports `@/components/Button` | Remove UI dependency |

### 5.3 Architecture Score

```
┌─────────────────────────────────────────────┐
│  Architecture Compliance: ___%               │
├─────────────────────────────────────────────┤
│  ✅ Correct layer placement: __/__ files     │
│  ⚠️ Dependency violations:   __ files         │
│  ❌ Wrong layer:              __ file         │
└─────────────────────────────────────────────┘
```

---

## 6. Convention Compliance

### 6.1 Naming Convention Check

| Category | Convention | Files Checked | Compliance | Violations |
|----------|-----------|:-------------:|:----------:|------------|
| Components | PascalCase | __ | __% | {list} |
| Functions | camelCase | __ | __% | {list} |
| Constants | UPPER_SNAKE_CASE | __ | __% | {list} |
| Files (component) | PascalCase.tsx | __ | __% | {list} |
| Files (utility) | camelCase.ts | __ | __% | {list} |
| Folders | kebab-case | __ | __% | {list} |

### 6.2 Convention Score

```
┌─────────────────────────────────────────────┐
│  Convention Compliance: ___%                 │
├─────────────────────────────────────────────┤
│  Naming:          ___%                       │
│  Folder Structure: ___%                      │
│  Import Order:     ___%                      │
│  Env Variables:    ___%                      │
└─────────────────────────────────────────────┘
```

---

## 7. Overall Score

```
┌─────────────────────────────────────────────┐
│  Overall Score: __/100                       │
├─────────────────────────────────────────────┤
│  Design Match:        __ points              │
│  Code Quality:        __ points              │
│  Security:            __ points              │
│  Testing:             __ points              │
│  Architecture:        __ points              │
│  Convention:          __ points              │
└─────────────────────────────────────────────┘
```

---

## 8. Recommended Actions

### 8.1 Immediate (24시간 내)

| Priority | Item | File | Assignee |
|----------|------|------|----------|
| 🔴 1 | Remove hardcoded secret | auth.ts:42 | - |
| 🔴 2 | Add input validation | api.ts:15 | - |

### 8.2 Short-term (1주일 내)

| Priority | Item | File | Expected Impact |
|----------|------|------|-----------------|
| 🟡 1 | Fix N+1 query | repository.ts | 60% response time reduction |
| 🟡 2 | Split function | service.ts | Improved maintainability |

### 8.3 Long-term (Backlog)

| Item | File | Notes |
|------|------|-------|
| Refactoring | utils/ | Clean up duplicate code |
| Documentation | - | Add JSDoc |

---

## 9. Design Document Updates Needed

다음 항목은 구현과 맞추기 위해 Design 문서 업데이트 필요:

- [ ] POST /api/{resource}/bulk endpoint 추가
- [ ] metadata field를 data model에 추가
- [ ] Error code list 업데이트

---

## 10. Next Steps

Match Rate >= 90%인 경우:
- [ ] 완료 보고서 작성 (`{feature}.report.md`)

Match Rate < 90%인 경우:
- [ ] Critical issues 수정
- [ ] 재분석 수행 (iteration)

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | {date} | Initial analysis | {author} |
