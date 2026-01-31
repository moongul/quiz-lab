# {feature} Planning Document

> **Summary**: {한 줄 설명}
>
> **Project**: {project}
> **Author**: {author}
> **Date**: {YYYY-MM-DD}
> **Status**: Draft

---

## 1. Overview

### 1.1 Purpose

{이 기능이 해결하는 문제 또는 달성 목표}

### 1.2 Background

{이 기능이 필요한 이유, 비즈니스 컨텍스트}

### 1.3 Related Documents

- Requirements: {link}
- References: {link}

---

## 2. Scope

### 2.1 In Scope

- [ ] {포함 항목 1}
- [ ] {포함 항목 2}
- [ ] {포함 항목 3}

### 2.2 Out of Scope

- {제외 항목 1}
- {제외 항목 2}

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | {요구사항 설명} | High/Medium/Low | Pending |
| FR-02 | {요구사항 설명} | High/Medium/Low | Pending |

### 3.2 Non-Functional Requirements

| Category | Criteria | Measurement Method |
|----------|----------|-------------------|
| Performance | {예: 응답 시간 < 200ms} | {도구/방법} |
| Security | {예: OWASP Top 10 준수} | {검증 방법} |
| Accessibility | {예: WCAG 2.1 AA} | {검증 방법} |

---

## 4. Success Criteria

### 4.1 Definition of Done

- [ ] 모든 기능 요구사항 구현
- [ ] 단위 테스트 작성 및 통과
- [ ] 코드 리뷰 완료
- [ ] 문서화 완료

### 4.2 Quality Criteria

- [ ] 테스트 커버리지 80% 이상
- [ ] 린트 에러 없음
- [ ] 빌드 성공

---

## 5. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| {위험 1} | High/Medium/Low | High/Medium/Low | {완화 계획} |
| {위험 2} | High/Medium/Low | High/Medium/Low | {완화 계획} |

---

## 6. Architecture Considerations

### 6.1 Project Level Selection

| Level | Characteristics | Recommended For | Selected |
|-------|-----------------|-----------------|:--------:|
| **Starter** | Simple structure (`components/`, `lib/`, `types/`) | 정적 사이트, 포트폴리오, 랜딩 페이지 | ☐ |
| **Dynamic** | Feature-based modules, services layer | 백엔드가 있는 웹앱, SaaS MVP | ☐ |
| **Enterprise** | Strict layer separation, DI, microservices | 고트래픽 시스템, 복잡한 아키텍처 | ☐ |

### 6.2 Key Architectural Decisions

| Decision | Options | Selected | Rationale |
|----------|---------|----------|-----------|
| Framework | Next.js / React / Vue | {selected} | {reason} |
| State Management | Context / Zustand / Redux / Jotai | {selected} | {reason} |
| API Client | fetch / axios / react-query | {selected} | {reason} |
| Styling | Tailwind / CSS Modules / styled-components | {selected} | {reason} |
| Testing | Jest / Vitest / Playwright | {selected} | {reason} |

---

## 7. Convention Prerequisites

### 7.1 Existing Project Conventions

- [ ] `CLAUDE.md` or `AGENTS.md` has coding conventions section
- [ ] ESLint configuration (`.eslintrc.*`)
- [ ] Prettier configuration (`.prettierrc`)
- [ ] TypeScript configuration (`tsconfig.json`)

### 7.2 Environment Variables Needed

| Variable | Purpose | Scope | To Be Created |
|----------|---------|-------|:-------------:|
| `NEXT_PUBLIC_API_URL` | API endpoint | Client | ☐ |
| `DATABASE_URL` | DB connection | Server | ☐ |
| {variable} | {purpose} | {scope} | ☐ |

---

## 8. Next Steps

1. [ ] Design 문서 작성 (`{feature}.design.md`)
2. [ ] 팀 리뷰 및 승인
3. [ ] 구현 시작

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | {date} | Initial draft | {author} |
