# PDCA Workflow Guide

> **Adapted from bkit for opencode** - PDCA methodology + Context Engineering for AI-native development

## PDCA Cycle Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      PDCA Cycle                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Plan ──────► Design ──────► Do ──────► Check ──────► Act     │
│     │                                                    │      │
│     └────────────────── Improvement Cycle ◄──────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Phases

| Phase | Document Location | Purpose |
|-------|-------------------|---------|
| **Plan** | `docs/pdca/01-plan/features/{feature}.plan.md` | Define goals, scope, success criteria |
| **Design** | `docs/pdca/02-design/features/{feature}.design.md` | Architecture, data model, API spec |
| **Do** | Code | Implement based on design |
| **Check** | `docs/pdca/03-analysis/{feature}.analysis.md` | Design-implementation gap analysis |
| **Act** | `docs/pdca/04-report/{feature}.report.md` | Completion report, lessons learned |

## Usage with opencode

### Start a New Feature

```
"새 기능 {feature-name} 계획 작성해줘"
→ docs/pdca/01-plan/features/{feature-name}.plan.md 생성
```

### Design Phase

```
"설계 문서 작성해줘" (Plan 문서 존재 필요)
→ docs/pdca/02-design/features/{feature-name}.design.md 생성
```

### Implementation (Do)

```
"구현 시작해줘" (Design 문서 존재 필요)
→ Design 문서 기반으로 구현
```

### Gap Analysis (Check)

```
"갭 분석해줘" (구현 완료 후)
→ docs/pdca/03-analysis/{feature-name}.analysis.md 생성
→ Design vs Implementation 비교
→ Match Rate 계산
```

### Completion Report (Act)

```
"완료 보고서 작성해줘" (Check >= 90% 후)
→ docs/pdca/04-report/{feature-name}.report.md 생성
```

## Check-Act Iteration Loop

```
gap-detector (Check)
    ↓
├── >= 90% Match Rate → 완료 보고서 생성
├── 70-89% Match Rate → 수동/자동 수정 선택
└── < 70% Match Rate  → 반복 수정 권장
         ↓
    pdca-iterator (Act)
         ↓
    Repeat (max 5 times)
```

## Task Classification

| Type | Lines | PDCA |
|------|-------|------|
| Quick Fix | < 10 lines | Optional |
| Minor Change | < 50 lines | Recommended |
| Feature | < 200 lines | Required |
| Major Feature | >= 200 lines | Required + Split |

## Related Files

- [Plan Template](./templates/plan.template.md)
- [Design Template](./templates/design.template.md)
- [Analysis Template](./templates/analysis.template.md)
- [Report Template](./templates/report.template.md)

---

## 9-Phase Development Pipeline (Optional)

대규모 프로젝트나 처음부터 시작하는 경우:

```
Phase 1: Schema/Terminology ──→ 데이터 구조 및 용어 정의
Phase 2: Coding Convention ────→ 코드 작성 규칙 정의
Phase 3: Mockup Development ───→ HTML/CSS/JS + JSON 목업
Phase 4: API Design/Impl ──────→ Backend API + QA
Phase 5: Design System ────────→ 컴포넌트 시스템 구축
Phase 6: UI Implementation ────→ UI 구현 및 API 연동
Phase 7: SEO/Security ─────────→ 검색 최적화 및 보안 강화
Phase 8: Review ───────────────→ 아키텍처/컨벤션 품질 검증
Phase 9: Deployment ───────────→ 프로덕션 배포
```

### Key Concept

```
❌ Wrong: Mapping entire Pipeline to PDCA
✅ Correct: Run PDCA cycle within EACH Phase

Phase N
├── Plan: 이 Phase에서 할 일 계획
├── Design: 상세 설계
├── Do: 실행/구현
├── Check: 검증/리뷰
└── Act: 확인 후 다음 Phase로
```
