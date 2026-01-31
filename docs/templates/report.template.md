# {feature} Completion Report

> **Report Type**: PDCA Completion Report
>
> **Project**: {project}
> **Author**: {author}
> **Date**: {YYYY-MM-DD}
> **Status**: Completed

---

## 1. Executive Summary

### 1.1 Feature Overview

{이 기능의 한 줄 요약}

### 1.2 Key Metrics

| Metric | Target | Achieved | Status |
|--------|--------|----------|--------|
| Design Match Rate | >= 90% | __% | ✅/❌ |
| Test Coverage | >= 80% | __% | ✅/❌ |
| Architecture Compliance | >= 85% | __% | ✅/❌ |
| Convention Compliance | >= 90% | __% | ✅/❌ |

### 1.3 Timeline

| Phase | Planned | Actual | Variance |
|-------|---------|--------|----------|
| Plan | {date} | {date} | 0 days |
| Design | {date} | {date} | 0 days |
| Do | {date} | {date} | +_ days |
| Check | {date} | {date} | 0 days |
| Act (iterations) | - | _ iterations | - |

---

## 2. PDCA Cycle Summary

### 2.1 Plan Phase

**Document**: [{feature}.plan.md](../01-plan/features/{feature}.plan.md)

**Key Decisions**:
- {결정 1}
- {결정 2}
- {결정 3}

### 2.2 Design Phase

**Document**: [{feature}.design.md](../02-design/features/{feature}.design.md)

**Architecture Chosen**: {Starter/Dynamic/Enterprise}

**Key Design Elements**:
- {설계 요소 1}
- {설계 요소 2}
- {설계 요소 3}

### 2.3 Do Phase (Implementation)

**Files Created/Modified**:

| Path | Action | Lines |
|------|--------|-------|
| `src/features/{feature}/index.ts` | Created | +150 |
| `src/components/{Component}.tsx` | Created | +80 |
| `src/lib/api/{feature}.ts` | Created | +45 |
| `src/types/{feature}.ts` | Created | +30 |

**Dependencies Added**:
- {package 1}: {purpose}
- {package 2}: {purpose}

### 2.4 Check Phase (Analysis)

**Document**: [{feature}.analysis.md](../03-analysis/{feature}.analysis.md)

**Iteration History**:

| Iteration | Match Rate | Issues Found | Issues Fixed |
|-----------|------------|--------------|--------------|
| 1 | __% | __ | __ |
| 2 | __% | __ | __ |
| Final | __% | - | - |

---

## 3. Delivered Outcomes

### 3.1 Functional Requirements

| ID | Requirement | Status |
|----|-------------|--------|
| FR-01 | {요구사항} | ✅ Completed |
| FR-02 | {요구사항} | ✅ Completed |
| FR-03 | {요구사항} | ⚠️ Partial |

### 3.2 Non-Functional Requirements

| Category | Criteria | Achieved |
|----------|----------|----------|
| Performance | Response time < 200ms | ✅ 150ms |
| Security | OWASP Top 10 | ✅ Passed |
| Accessibility | WCAG 2.1 AA | ⚠️ Partial |

### 3.3 API Endpoints Delivered

| Method | Path | Description | Status |
|--------|------|-------------|--------|
| GET | /api/{resource} | List all | ✅ |
| POST | /api/{resource} | Create | ✅ |
| PUT | /api/{resource}/:id | Update | ✅ |
| DELETE | /api/{resource}/:id | Delete | ✅ |

---

## 4. Quality Metrics

### 4.1 Code Quality

| Metric | Value | Status |
|--------|-------|--------|
| Cyclomatic Complexity (avg) | __ | ✅/⚠️/❌ |
| Duplicate Code | __% | ✅/⚠️/❌ |
| ESLint Errors | __ | ✅/⚠️/❌ |
| TypeScript Errors | __ | ✅/⚠️/❌ |

### 4.2 Test Quality

| Type | Tests | Passed | Coverage |
|------|-------|--------|----------|
| Unit | __ | __ | __% |
| Integration | __ | __ | __% |
| E2E | __ | __ | - |

### 4.3 Performance

| Endpoint | Avg Response | P95 | Target |
|----------|-------------|-----|--------|
| GET /api/{resource} | __ ms | __ ms | < 200ms |
| POST /api/{resource} | __ ms | __ ms | < 300ms |

---

## 5. Lessons Learned

### 5.1 What Went Well

1. **{성공 사항 1}**
   - {상세 설명}

2. **{성공 사항 2}**
   - {상세 설명}

### 5.2 What Could Be Improved

1. **{개선 가능 사항 1}**
   - Problem: {문제}
   - Suggestion: {제안}

2. **{개선 가능 사항 2}**
   - Problem: {문제}
   - Suggestion: {제안}

### 5.3 Technical Debt Identified

| Item | Priority | Estimated Effort | Ticket |
|------|----------|-----------------|--------|
| {기술 부채 1} | High/Medium/Low | __ hours | - |
| {기술 부채 2} | High/Medium/Low | __ hours | - |

---

## 6. Documentation

### 6.1 Generated Documentation

| Document | Location | Status |
|----------|----------|--------|
| Plan | `docs/pdca/01-plan/features/{feature}.plan.md` | ✅ |
| Design | `docs/pdca/02-design/features/{feature}.design.md` | ✅ |
| Analysis | `docs/pdca/03-analysis/{feature}.analysis.md` | ✅ |
| This Report | `docs/pdca/04-report/{feature}.report.md` | ✅ |

### 6.2 API Documentation

- [ ] OpenAPI spec generated
- [ ] API endpoints documented
- [ ] Example requests/responses added

### 6.3 Code Documentation

- [ ] JSDoc comments added
- [ ] README updated
- [ ] CHANGELOG updated

---

## 7. Deployment Notes

### 7.1 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| {VAR_1} | Yes | {description} |
| {VAR_2} | No | {description} |

### 7.2 Database Migrations

| Migration | Description | Status |
|-----------|-------------|--------|
| {migration_1} | {description} | ✅ Applied |

### 7.3 Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Feature flags configured (if any)
- [ ] Monitoring/alerting set up
- [ ] Rollback plan documented

---

## 8. Sign-off

| Role | Name | Date | Approval |
|------|------|------|----------|
| Developer | {name} | {date} | ✅ |
| Reviewer | {name} | {date} | ⏳ |
| QA | {name} | {date} | ⏳ |

---

## 9. Next Steps

### 9.1 Immediate

- [ ] Merge to main branch
- [ ] Deploy to staging
- [ ] Stakeholder demo

### 9.2 Follow-up Items

- [ ] {후속 작업 1}
- [ ] {후속 작업 2}

### 9.3 Archive

After completion:
- [ ] Archive PDCA documents to `docs/pdca/archive/YYYY-MM/{feature}/`

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | {date} | Initial completion report | {author} |
