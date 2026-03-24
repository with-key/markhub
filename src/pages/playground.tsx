import { useMemo, useState } from "react";

import {
  AlertDialog,
  AppShell,
  Box,
  Button,
  CheckboxField,
  ComboboxField,
  Dialog,
  Flex,
  Grid,
  MarkdownPreview,
  Menu,
  RadioGroupField,
  SectionHeader,
  SelectField,
  Surface,
  SwitchField,
  TextAreaField,
  TextField,
} from "@/components";

import {
  buttonRow,
  buttonStack,
  codeLine,
  formGrid,
  fullSpan,
  heroGrid,
  introBody,
  introTitle,
  layout,
  metaCard,
  miniGrid,
  noteCard,
  panelLabel,
  responsiveGrid,
  sectionStack,
  statusHint,
  statusItem,
  statusLabel,
  statusList,
  statusValue,
  surfacePreview,
  surfaceText,
  surfaceTitle,
  utilityText,
  utilityTile,
  utilityTitle,
} from "@/styles/playground.css";

const selectItems = [
  { value: "planning", label: "Planning", description: "로드맵과 스코프 정리" },
  { value: "design", label: "Design", description: "흐름과 화면 구조 설계" },
  { value: "delivery", label: "Delivery", description: "릴리스 직전 검토와 정리" },
];

const comboboxItems = [
  { value: "figma", label: "Figma", description: "디자인 파일과 명세", keywords: ["design"] },
  { value: "slack", label: "Slack", description: "팀 커뮤니케이션", keywords: ["chat"] },
  { value: "github", label: "GitHub", description: "이슈와 코드 리뷰", keywords: ["code"] },
  { value: "notion", label: "Notion", description: "회의록과 문서 아카이브", keywords: ["docs"] },
];

const markdownSample = `# Playground Notes
공통 컴포넌트를 실제 상태와 함께 점검하는 페이지입니다.

## 체크 포인트
- hover, focus, disabled 상태 확인
- long label과 description 밀도 확인
- overlay 계열의 간격과 표면 일관성 확인

## 권장 확인 순서
1. 버튼과 surface 조합 확인
2. 입력 필드와 선택 컨트롤 상호작용 확인
3. 메뉴, 다이얼로그, 얼럿 다이얼로그 열어보기`;

export default function PlaygroundPage() {
  const [name, setName] = useState("Aurora planning sync");
  const [summary, setSummary] = useState(
    "다음 분기 범위를 정리하고 문서 연결 구조를 가볍게 재배치합니다.",
  );
  const [selectedStage, setSelectedStage] = useState<string | null>("planning");
  const [selectedTool, setSelectedTool] = useState<string | null>("github");
  const [reviewMode, setReviewMode] = useState("balanced");
  const [watchingUpdates, setWatchingUpdates] = useState(true);
  const [sharingDocs, setSharingDocs] = useState(false);

  const summaryLines = useMemo(
    () => [
      `stage=${selectedStage ?? "none"}`,
      `tool=${selectedTool ?? "none"}`,
      `review=${reviewMode}`,
      `watch=${watchingUpdates ? "on" : "off"}`,
      `share=${sharingDocs ? "on" : "off"}`,
    ],
    [reviewMode, selectedStage, selectedTool, sharingDocs, watchingUpdates],
  );

  return (
    <AppShell
      currentPath="/playground"
      description="공통 컴포넌트와 유틸리티를 브라우저에서 한 번에 확인하는 인터랙티브 플레이그라운드입니다."
      eyebrow="Design System"
      title="Component Playground"
    >
      <div className={layout}>
        <div className={heroGrid}>
          <Surface className={noteCard} as="section">
            <p className={panelLabel}>Overview</p>
            <h3 className={introTitle}>상태가 있는 데모로 컴포넌트 표면과 상호작용을 함께 확인합니다.</h3>
            <p className={introBody}>
              이 페이지는 버튼, 입력 필드, 오버레이, 마크다운, 레이아웃 유틸리티를 한 화면에 모아
              디자인 언어와 조합 상태를 빠르게 검토하기 위한 용도입니다.
            </p>
            <div className={buttonRow}>
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Surface>

          <Surface as="section" padding="md" variant="subtle">
            <SectionHeader
              description="현재 playground에서 바로 확인 가능한 상태 요약"
              title="Live State"
            />
            <div className={statusList}>
              <div className={statusItem}>
                <p className={statusLabel}>선택된 단계</p>
                <p className={statusValue}>{selectedStage ?? "미선택"}</p>
                <p className={statusHint}>SelectField와 연동됩니다.</p>
              </div>
              <div className={statusItem}>
                <p className={statusLabel}>연결 도구</p>
                <p className={statusValue}>{selectedTool ?? "미선택"}</p>
                <p className={statusHint}>ComboboxField 필터 결과를 즉시 반영합니다.</p>
              </div>
              <div className={statusItem}>
                <p className={statusLabel}>설정 스냅샷</p>
                <p className={statusHint}>{summaryLines.join(" / ")}</p>
              </div>
            </div>
          </Surface>
        </div>

        <Surface as="section">
          <SectionHeader
            description="variant와 size 조합, 그리고 서로 다른 surface 위에서의 대비를 한 번에 비교합니다."
            title="Buttons And Surfaces"
          />
          <div className={sectionStack}>
            <div className={buttonStack}>
              <p className={panelLabel}>Buttons</p>
              <div className={buttonRow}>
                <Button size="md">Primary / md</Button>
                <Button size="lg">Primary / lg</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button disabled variant="secondary">
                  Disabled
                </Button>
              </div>
            </div>

            <div className={miniGrid}>
              <Surface className={surfacePreview} padding="sm" variant="panel">
                <p className={surfaceTitle}>Panel</p>
                <p className={surfaceText}>기본적인 강조 표면입니다. 그림자와 라운드가 가장 강합니다.</p>
              </Surface>
              <Surface className={surfacePreview} padding="sm" variant="card">
                <p className={surfaceTitle}>Card</p>
                <p className={surfaceText}>중립적인 컨테이너로, 정보 카드와 요약 블록에 어울립니다.</p>
              </Surface>
              <Surface className={surfacePreview} padding="sm" variant="subtle">
                <p className={surfaceTitle}>Subtle</p>
                <p className={surfaceText}>배경 대비를 낮춰 보조 정보나 미리보기 영역에 적합합니다.</p>
              </Surface>
            </div>
          </div>
        </Surface>

        <Surface as="section">
          <SectionHeader
            description="입력과 선택 계열 컴포넌트를 실제 상태와 함께 확인합니다."
            title="Form Controls"
          />
          <div className={formGrid}>
            <TextField
              description="짧은 텍스트 입력용 기본 필드"
              label="문서 제목"
              onChange={(event) => setName(event.target.value)}
              placeholder="예: Aurora planning sync"
              value={name}
            />
            <SelectField
              description="현재 작업 단계"
              items={selectItems}
              label="진행 단계"
              onValueChange={setSelectedStage}
              value={selectedStage}
            />
            <ComboboxField
              description="연동 도구를 검색해서 선택"
              items={comboboxItems}
              label="연결 도구"
              onValueChange={setSelectedTool}
              value={selectedTool}
            />
            <RadioGroupField
              description="리뷰 강도 선택"
              label="검토 모드"
              onValueChange={setReviewMode}
              options={[
                { value: "fast", label: "Fast", description: "핵심만 빠르게 확인" },
                { value: "balanced", label: "Balanced", description: "일반적인 기본값" },
                { value: "strict", label: "Strict", description: "배포 전 수준으로 확인" },
              ]}
              value={reviewMode}
            />
            <div>
              <CheckboxField
                checked={sharingDocs}
                description="프로젝트 문서를 관련 참여자에게 자동 공유"
                label="문서 공유 자동화"
                onCheckedChange={setSharingDocs}
              />
            </div>
            <div>
              <SwitchField
                checked={watchingUpdates}
                description="변경 사항 발생 시 요약 알림 전송"
                label="업데이트 감시"
                onCheckedChange={setWatchingUpdates}
              />
            </div>
            <div className={fullSpan}>
              <TextAreaField
                description="긴 설명이나 회의 요약 입력에 사용"
                label="요약 메모"
                onChange={(event) => setSummary(event.target.value)}
                placeholder="문서 상태를 입력하세요"
                rows={5}
                value={summary}
              />
            </div>
            <div className={fullSpan}>
              <Surface className={metaCard} padding="md" variant="subtle">
                <p className={panelLabel}>Current Values</p>
                {summaryLines.map((line) => (
                  <p key={line} className={codeLine}>
                    {line}
                  </p>
                ))}
                <p className={codeLine}>title={name || "empty"}</p>
                <p className={codeLine}>summary={summary || "empty"}</p>
              </Surface>
            </div>
          </div>
        </Surface>

        <div className={responsiveGrid}>
          <Surface as="section">
            <SectionHeader
              description="메뉴, 다이얼로그, 얼럿 다이얼로그를 같은 문맥에서 확인합니다."
              title="Overlays"
            />
            <div className={buttonRow}>
              <Menu
                items={[
                  { kind: "item", label: "새 에픽 만들기", description: "현재 컨텍스트 기준 초안 생성" },
                  { kind: "checkbox", label: "중요 항목만 보기", checked: true },
                  { kind: "separator" },
                  {
                    kind: "radio-group",
                    label: "정렬 기준",
                    value: "updated",
                    items: [
                      { value: "updated", label: "최근 업데이트" },
                      { value: "owner", label: "담당자" },
                    ],
                  },
                ]}
                triggerLabel="Open Menu"
              />
              <Dialog
                bodyText="기획 리뷰 세션을 열면 관련 에픽, 태스크, 문서가 하나의 컨텍스트로 묶입니다."
                title="리뷰 세션 시작"
                triggerLabel="Open Dialog"
              />
              <AlertDialog
                bodyText="이 작업은 연결된 문서 링크를 모두 정리하며 자동 복구되지 않습니다."
                title="문서를 정말 정리할까요?"
                triggerLabel="Open Alert"
              />
            </div>
          </Surface>

          <Surface as="section">
            <SectionHeader
              description="간단한 문서 미리보기 컴포넌트도 함께 점검합니다."
              title="Markdown Preview"
            />
            <MarkdownPreview content={markdownSample} />
          </Surface>
        </div>

        <Surface as="section">
          <SectionHeader
            description="Box, Flex, Grid 유틸리티를 화면에서 바로 확인할 수 있는 최소 샘플입니다."
            title="Layout Utilities"
          />
          <Grid gap={4} gridTemplateColumns="autoSm">
            <Box className={utilityTile} p={4}>
              <p className={utilityTitle}>Box</p>
              <p className={utilityText}>sprinkles 기반 spacing과 sizing을 가장 직접적으로 적용합니다.</p>
            </Box>
            <Flex className={utilityTile} alignItems="center" gap={3} justifyContent="space-between" p={4}>
              <div>
                <p className={utilityTitle}>Flex</p>
                <p className={utilityText}>행 단위 정렬과 간격 제어를 빠르게 구성합니다.</p>
              </div>
              <Button size="md" variant="secondary">
                Action
              </Button>
            </Flex>
            <Grid className={utilityTile} gap={3} gridTemplateColumns={2} p={4}>
              <div>
                <p className={utilityTitle}>Grid</p>
                <p className={utilityText}>반복적인 카드 배열과 대시보드 밀도 조정에 적합합니다.</p>
              </div>
              <Surface padding="sm" variant="subtle">
                <p className={utilityText}>Nested layout</p>
              </Surface>
            </Grid>
          </Grid>
        </Surface>
      </div>
    </AppShell>
  );
}
