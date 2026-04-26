# @kurateh/eslint-plugin

[English](./README.md) | 한국어

개인적인 ESLint 규칙과 권장 설정을 포함하는 플러그인입니다.

## 환경 요구 사항
- **NodeJS**: >=22
- **ESLint**: >= 9 (Flat Config 전용)
- **TypeScript**: >= 5.7.2

## 1. 사용법

### 설치
```bash
pnpm add -D @kurateh/eslint-plugin
# 또는
npm install --save-dev @kurateh/eslint-plugin
```

### ESLint 설정 (`eslint.config.mjs`)
이 플러그인은 ESLint Flat Config를 지원합니다. 다음과 같이 설정을 추가할 수 있습니다.

```javascript
import kuratehPlugin from "@kurateh/eslint-plugin";

export default [
  // 권장 설정 적용
  kuratehPlugin.configs.recommended,
  
  // React 환경인 경우 추가 설정 적용
  kuratehPlugin.configs.react,
  
  {
    plugins: {
      "@kurateh": kuratehPlugin,
    },
    rules: {
      // 특정 규칙을 커스텀하고 싶은 경우
      "@kurateh/import-path": "error",
    },
  },
];
```

### 제공되는 설정
- `configs.recommended`: 일반적인 TypeScript 프로젝트를 위한 권장 설정 (Prettier 포함).
- `configs.react`: React 프로젝트를 위한 추가 설정 (Hooks 규칙 포함).

## 2. GitHub Actions를 통한 배포 방법

이 프로젝트는 GitHub Actions를 통해 NPM 저장소에 자동으로 배포됩니다.

### 배포 절차
1.  **CHANGELOG.md 작성**: 배포 전에 `CHANGELOG.md`의 `## [Unreleased]` 섹션 아래에 이번 버전에 포함된 변경 사항을 기록합니다.
    *   **작성 예시**:
        ```markdown
        ## [Unreleased]
        ### Added
        - 새로운 규칙 `@kurateh/new-rule` 추가
        ### Fixed
        - `import-path` 규칙의 오탐 문제 수정
        ```
2.  GitHub 저장소의 **Actions** 탭으로 이동합니다.
3.  왼쪽 워크플로우 목록에서 **Release package**를 선택합니다.
4.  **Run workflow** 버튼을 클릭합니다.
5.  다음 옵션 중 하나를 선택하거나 입력합니다:
    - **Release type**: `patch`, `minor`, `major` 중 하나를 선택하여 버전을 올립니다.
    - **Custom version (선택 사항)**: 특정 버전으로 바로 배포하고 싶을 때 입력합니다 (예: `10.0.0`). 이 값을 입력하면 `Release type`은 무시됩니다.
6.  **Run workflow**를 클릭하면 다음 과정이 자동으로 진행됩니다:
    - 빌드 및 테스트 수행
    - `CHANGELOG.md`의 `[Unreleased]` 섹션이 새 버전 번호로 업데이트됨
    - `package.json` 버전 업데이트 및 변경 사항 커밋/태그 생성
    - NPM 배포 및 GitHub Release 생성 (Changelog 내용이 Release 노트로 포함됨)

---
**주의**: 배포를 위해서는 `NPMJS_ACCESS_TOKEN`이 GitHub Secrets에 등록되어 있어야 합니다.
