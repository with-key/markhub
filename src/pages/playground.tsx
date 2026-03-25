import {
  AlertDialog,
  Box,
  Button,
  Checkbox,
  Combobox,
  Dialog,
  Flex,
  Grid,
  MarkdownPreview,
  Menu,
  RadioGroup,
  SectionHeader,
  Select,
  Surface,
  Switch,
  TextArea,
  TextField,
  Typography,
} from "@/components";
import {
  groupLabel,
  menuIndicator,
  menuItem,
  menuItemBody,
  menuItemDescription,
  menuItemLabel,
  menuShortcut,
  menuTrigger,
  separator,
} from "@/components/menu/Menu.css";
import { list, popup, positioner } from "@/components/shared/control.css";
import { cx } from "@/components/shared/cx";
import {
  accentBlock,
  body,
  closeButton,
  dangerPopup,
  description,
  footer,
  header,
  title,
  titleRow,
} from "@/components/shared/dialog.css";
import {
  CheckIcon,
  ChevronDownIcon,
  CircleIcon,
  CloseIcon,
} from "@/components/shared/icons";
import {
  canvasCard,
  chip,
  chipActive,
  chipRow,
  componentGrid,
  componentStack,
  metaText,
  page,
  previewGrid,
  previewSection,
  sectionList,
  toolbar,
  toolbarHint,
  toolbarTitle,
  typographyBodySample,
  typographyCard,
  typographyGrid,
  typographyMeta,
  typographySample,
  typographySpec,
  typographyStack,
  typographyToken,
  utilityBlock,
  utilityGrid,
} from "@/styles/playground.css";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

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

const markdownSample = `# Release checklist
릴리스 직전 시각 밀도와 상태 표현을 점검합니다.

## 확인 항목
- label과 description 간격
- disabled 상태의 대비
- overlay 표면의 톤 일관성

## 시나리오
1. 선택형 필드 열기
2. overlay 트리거 확인
3. 긴 텍스트 줄바꿈 확인`;

const previewOptions = [
  { id: "all", label: "All" },
  { id: "button", label: "Button" },
  { id: "surface", label: "Surface" },
  { id: "text-field", label: "TextField" },
  { id: "text-area", label: "TextArea" },
  { id: "select", label: "Select" },
  { id: "combobox", label: "Combobox" },
  { id: "radio", label: "RadioGroup" },
  { id: "checkbox", label: "Checkbox" },
  { id: "switch", label: "Switch" },
  { id: "menu", label: "Menu" },
  { id: "dialog", label: "Dialog" },
  { id: "alert-dialog", label: "AlertDialog" },
  { id: "markdown", label: "MarkdownPreview" },
  { id: "section-header", label: "SectionHeader" },
  { id: "typography", label: "Typography" },
  { id: "layout", label: "Layout Utils" },
] as const;

const typographyScaleSamples = [
  {
    id: "hero",
    variant: "heading01",
    label: "heading01",
    sample: "Connected work, sharply arranged.",
    spec: "display / clamp(2.5rem, 6vw, 4.5rem) / bold",
  },
  {
    id: "title-lg",
    variant: "heading02",
    label: "heading02",
    sample: "Project pulse",
    spec: "display / 1.625rem / bold",
  },
  {
    id: "title-md",
    variant: "heading03",
    label: "heading03",
    sample: "Release readiness",
    spec: "display / 1.375rem / semibold",
  },
  {
    id: "title-sm",
    variant: "heading04",
    label: "heading04",
    sample: "Section structure",
    spec: "display / 1.125rem / semibold",
  },
] as const;

const typographyBodySamples = [
  {
    id: "body-md",
    variant: "body01",
    label: "body01",
    sample: "문서, 태스크, 에픽을 하나의 흐름으로 읽을 수 있게 정리된 기본 본문 스타일입니다.",
    spec: "body / 1rem / 1.6",
  },
  {
    id: "body-sm",
    variant: "body02",
    label: "body02",
    sample: "보조 설명이나 서브텍스트에서 가장 자주 쓰는 크기입니다.",
    spec: "body / 0.875rem / 1.6",
  },
  {
    id: "body-xs",
    variant: "body03",
    label: "body03",
    sample: "메타 정보, 도움말, 압축된 설명에 적합합니다.",
    spec: "body / 0.75rem / 1.6",
  },
  {
    id: "label-md",
    variant: "label01",
    label: "label01",
    sample: "Primary label",
    spec: "body / 1rem / semibold",
  },
  {
    id: "label-sm",
    variant: "label02",
    label: "label02",
    sample: "Secondary label",
    spec: "body / 0.875rem / semibold",
  },
  {
    id: "label-xs",
    variant: "label03",
    label: "label03",
    sample: "Status marker",
    spec: "body / 0.75rem / uppercase",
  },
  {
    id: "eyebrow",
    variant: "overline01",
    label: "overline01",
    sample: "Navigation state",
    spec: "display / caps / tracking 0.14em",
  },
  {
    id: "code-sm",
    variant: "code01",
    label: "code01",
    sample: "mdhub/project/release.v2",
    spec: "mono / 0.875rem / medium",
  },
] as const;

type PreviewId = (typeof previewOptions)[number]["id"];

function readHash(): PreviewId {
  if (typeof window === "undefined") {
    return "all";
  }

  const hash = window.location.hash.replace("#", "") as PreviewId;
  return previewOptions.some((option) => option.id === hash) ? hash : "all";
}

type PreviewSectionProps = {
  children: ReactNode;
  description?: string;
  id: Exclude<PreviewId, "all">;
  title: string;
};

function PreviewSection({ children, description, id, title }: PreviewSectionProps) {
  return (
    <Surface as="section" className={previewSection} id={id} padding="lg" variant="panel">
      <SectionHeader description={description} title={title} />
      <div className={componentStack}>{children}</div>
    </Surface>
  );
}

function DialogPreview() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="secondary" />}>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup>
            <div style={{ display: "grid", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <Dialog.Title>리뷰 세션 시작</Dialog.Title>
                <Dialog.Close
                  aria-label="닫기"
                  render={
                    <button
                      type="button"
                      style={{
                        width: 36,
                        height: 36,
                        border: "1px solid var(--border)",
                        borderRadius: 999,
                        background: "transparent",
                        color: "var(--text-muted)",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  <CloseIcon style={{ width: 16, height: 16 }} />
                </Dialog.Close>
              </div>
              <Dialog.Description>
                기획 리뷰 세션을 열면 관련 에픽, 태스크, 문서가 하나의 컨텍스트로 묶입니다.
              </Dialog.Description>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: 20,
                  background: "var(--surface-raised)",
                  color: "var(--text-muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                }}
              >
                핵심 설정과 주의사항을 빠르게 확인할 수 있는 조용한 모달 패턴입니다.
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, flexWrap: "wrap" }}>
              <Dialog.Close render={<Button variant="ghost" />}>취소</Dialog.Close>
              <Dialog.Close render={<Button />}>확인</Dialog.Close>
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function AlertDialogPreview() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger render={<Button variant="ghost" />}>Open Alert</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Viewport>
          <AlertDialog.Popup className={dangerPopup}>
            <div className={header}>
              <div className={titleRow}>
                <AlertDialog.Title className={title}>문서를 정말 정리할까요?</AlertDialog.Title>
                <AlertDialog.Close className={closeButton} aria-label="닫기">
                  <CloseIcon style={{ width: 16, height: 16 }} />
                </AlertDialog.Close>
              </div>
              <AlertDialog.Description className={description}>
                이 작업은 연결된 문서 링크를 모두 정리하며 자동 복구되지 않습니다.
              </AlertDialog.Description>
            </div>

            <div className={body}>
              <div className={accentBlock}>되돌리기 어려운 작업은 한 번 더 확인하는 것이 안전합니다.</div>
            </div>

            <div className={footer}>
              <AlertDialog.Close render={<Button variant="ghost" />}>돌아가기</AlertDialog.Close>
              <AlertDialog.Close render={<Button variant="danger" />}>계속 진행</AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Viewport>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default function PlaygroundPage() {
  const [activePreview, setActivePreview] = useState<PreviewId>("all");
  const [name, setName] = useState("Aurora planning sync");
  const [summary, setSummary] = useState(
    "다음 분기 범위를 정리하고 문서 연결 구조를 가볍게 재배치합니다.",
  );
  const [selectedStage, setSelectedStage] = useState<string | null>("planning");
  const [selectedTool, setSelectedTool] = useState<string | null>("github");
  const [reviewMode, setReviewMode] = useState("balanced");
  const [watchingUpdates, setWatchingUpdates] = useState(true);
  const [sharingDocs, setSharingDocs] = useState(false);
  const [showPriorityOnly, setShowPriorityOnly] = useState(true);
  const [menuSort, setMenuSort] = useState("updated");

  useEffect(() => {
    const syncPreview = () => setActivePreview(readHash());

    syncPreview();
    window.addEventListener("hashchange", syncPreview);

    return () => window.removeEventListener("hashchange", syncPreview);
  }, []);

  const handleSelectPreview = (id: PreviewId) => {
    setActivePreview(id);

    if (typeof window === "undefined") {
      return;
    }

    const nextUrl = id === "all" ? window.location.pathname : `${window.location.pathname}#${id}`;
    window.history.replaceState(null, "", nextUrl);
  };

  const isVisible = (id: Exclude<PreviewId, "all">) => activePreview === "all" || activePreview === id;

  return (
    <main className={page}>
      <Surface className={toolbar} padding="lg" variant="card">
        <div>
          <h1 className={toolbarTitle}>Component Playground</h1>
          <p className={toolbarHint}>
            불필요한 소개 영역 없이, 해시 단위로 컴포넌트를 바로 고립해서 확인합니다.
          </p>
        </div>
        <div className={chipRow}>
          {previewOptions.map((option) => (
            <button
              key={option.id}
              className={cx(chip, activePreview === option.id ? chipActive : undefined)}
              onClick={() => handleSelectPreview(option.id)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </Surface>

      <div className={sectionList}>
        {isVisible("button") ? (
          <PreviewSection
            description="variant와 size를 한 화면에서 바로 비교합니다."
            id="button"
            title="Button"
          >
            <div className={previewGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <div className={componentGrid}>
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button size="lg">Large</Button>
                  <Button disabled variant="secondary">
                    Disabled
                  </Button>
                </div>
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("surface") ? (
          <PreviewSection
            description="표면 계층과 패딩 밀도를 비교합니다."
            id="surface"
            title="Surface"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="panel">
                <p className={metaText}>Panel</p>
                <p className={metaText}>강한 분리감이 필요한 기본 컨테이너</p>
              </Surface>
              <Surface className={canvasCard} padding="md" variant="card">
                <p className={metaText}>Card</p>
                <p className={metaText}>정보 카드와 요약 블록에 적합한 중립 표면</p>
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <p className={metaText}>Subtle</p>
                <p className={metaText}>배경 대비를 낮춘 보조 미리보기 표면</p>
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("text-field") ? (
          <PreviewSection
            description="기본값, 에러, 비활성 상태를 함께 봅니다."
            id="text-field"
            title="TextField"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <TextField
                  description="짧은 텍스트 입력용 기본 필드"
                  label="문서 제목"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="예: Aurora planning sync"
                  value={name}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <TextField
                  description="검증 메세지 노출 상태"
                  error="제목은 4자 이상이어야 합니다."
                  label="검토 제목"
                  placeholder="짧은 제목"
                  readOnly
                  value="QA"
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <TextField
                  description="읽기 전용 확인용"
                  disabled
                  label="잠긴 필드"
                  value="Release locked"
                />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("text-area") ? (
          <PreviewSection
            description="긴 문장과 에러 메시지 줄바꿈을 확인합니다."
            id="text-area"
            title="TextArea"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <TextArea
                  description="긴 설명 입력용 기본 필드"
                  label="요약 메모"
                  onChange={(event) => setSummary(event.target.value)}
                  rows={5}
                  value={summary}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <TextArea
                  description="검증 실패 상태"
                  error="최소 20자 이상 입력해야 합니다."
                  label="배포 메모"
                  readOnly
                  rows={5}
                  value="짧음"
                />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("select") ? (
          <PreviewSection
            description="선택 전, 선택 후, 비활성 상태를 비교합니다."
            id="select"
            title="Select"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Select
                  description="현재 작업 단계"
                  items={selectItems}
                  label="진행 단계"
                  onValueChange={setSelectedStage}
                  value={selectedStage}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Select
                  description="placeholder 상태"
                  items={selectItems}
                  label="빈 선택"
                  onValueChange={() => undefined}
                  value={null}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Select
                  description="비활성 상태"
                  disabled
                  items={selectItems}
                  label="잠긴 선택"
                  value="delivery"
                />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("combobox") ? (
          <PreviewSection
            description="검색 가능한 선택 필드를 고립해서 확인합니다."
            id="combobox"
            title="Combobox"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Combobox
                  description="연동 도구를 검색해서 선택"
                  items={comboboxItems}
                  label="연결 도구"
                  onValueChange={setSelectedTool}
                  value={selectedTool}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Combobox
                  description="선택 전 상태"
                  items={comboboxItems}
                  label="도구 검색"
                  onValueChange={() => undefined}
                  value={null}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Combobox
                  description="비활성 상태"
                  disabled
                  items={comboboxItems}
                  label="잠긴 검색"
                  value="slack"
                />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("radio") ? (
          <PreviewSection
            description="선택 카드의 밀도와 라디오 인디케이터를 확인합니다."
            id="radio"
            title="RadioGroup"
          >
            <div className={previewGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <RadioGroup
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
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("checkbox") ? (
          <PreviewSection
            description="checked, indeterminate, disabled 조합을 확인합니다."
            id="checkbox"
            title="Checkbox"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Checkbox
                  checked={sharingDocs}
                  description="프로젝트 문서를 관련 참여자에게 자동 공유"
                  label="문서 공유 자동화"
                  onCheckedChange={setSharingDocs}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Checkbox
                  description="부분 선택 상태 확인"
                  indeterminate
                  label="하위 문서 일부만 공유"
                  onCheckedChange={() => undefined}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Checkbox
                  checked
                  description="비활성 상태"
                  disabled
                  label="잠긴 옵션"
                />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("switch") ? (
          <PreviewSection
            description="토글 스위치의 활성/비활성 조합을 확인합니다."
            id="switch"
            title="Switch"
          >
            <div className={componentGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Switch
                  checked={watchingUpdates}
                  description="변경 사항 발생 시 요약 알림 전송"
                  label="업데이트 감시"
                  onCheckedChange={setWatchingUpdates}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Switch
                  description="기본 비활성 상태"
                  label="자동 배포"
                  onCheckedChange={() => undefined}
                />
              </Surface>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Switch
                  checked
                  description="잠긴 설정"
                  disabled
                  label="긴급 보호 모드"
                />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("menu") ? (
          <PreviewSection
            description="액션, 체크박스, 라디오 그룹이 포함된 메뉴를 별도로 테스트합니다."
            id="menu"
            title="Menu"
          >
            <div className={previewGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <Menu.Root modal={false}>
                  <Menu.Trigger className={menuTrigger} render={<Button variant="secondary" />}>
                    Open Menu
                    <ChevronDownIcon style={{ width: 16, height: 16 }} />
                  </Menu.Trigger>
                  <Menu.Portal>
                    <Menu.Positioner className={positioner} sideOffset={8}>
                      <Menu.Popup className={popup}>
                        <div className={list}>
                          <Menu.Item className={menuItem} closeOnClick>
                            <span />
                            <span className={menuItemBody}>
                              <span className={menuItemLabel}>새 에픽 만들기</span>
                              <span className={menuItemDescription}>
                                현재 컨텍스트 기준 초안 생성
                              </span>
                            </span>
                            <span className={menuShortcut} />
                          </Menu.Item>

                          <Menu.CheckboxItem
                            checked={showPriorityOnly}
                            className={menuItem}
                            closeOnClick={false}
                            onCheckedChange={setShowPriorityOnly}
                          >
                            <Menu.CheckboxItemIndicator className={menuIndicator}>
                              <CheckIcon />
                            </Menu.CheckboxItemIndicator>
                            <span className={menuItemBody}>
                              <span className={menuItemLabel}>중요 항목만 보기</span>
                            </span>
                            <span className={menuShortcut} />
                          </Menu.CheckboxItem>

                          <Menu.Separator className={separator} />

                          <Menu.Group>
                            <Menu.GroupLabel className={groupLabel}>정렬 기준</Menu.GroupLabel>
                            <Menu.RadioGroup onValueChange={setMenuSort} value={menuSort}>
                              <Menu.RadioItem className={menuItem} closeOnClick value="updated">
                                <Menu.RadioItemIndicator className={menuIndicator}>
                                  <CircleIcon />
                                </Menu.RadioItemIndicator>
                                <span className={menuItemBody}>
                                  <span className={menuItemLabel}>최근 업데이트</span>
                                </span>
                                <span />
                              </Menu.RadioItem>
                              <Menu.RadioItem className={menuItem} closeOnClick value="owner">
                                <Menu.RadioItemIndicator className={menuIndicator}>
                                  <CircleIcon />
                                </Menu.RadioItemIndicator>
                                <span className={menuItemBody}>
                                  <span className={menuItemLabel}>담당자</span>
                                </span>
                                <span />
                              </Menu.RadioItem>
                            </Menu.RadioGroup>
                          </Menu.Group>
                        </div>
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.Root>
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("dialog") ? (
          <PreviewSection
            description="기본 다이얼로그의 표면과 footer 액션을 확인합니다."
            id="dialog"
            title="Dialog"
          >
            <div className={previewGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <DialogPreview />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("alert-dialog") ? (
          <PreviewSection
            description="강한 의사결정이 필요한 파괴적 액션 패턴을 확인합니다."
            id="alert-dialog"
            title="AlertDialog"
          >
            <div className={previewGrid}>
              <Surface className={canvasCard} padding="md" variant="subtle">
                <AlertDialogPreview />
              </Surface>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("markdown") ? (
          <PreviewSection
            description="타이포그래피와 리스트 기본 스타일을 확인합니다."
            id="markdown"
            title="MarkdownPreview"
          >
            <Surface className={canvasCard} padding="md" variant="subtle">
              <MarkdownPreview content={markdownSample} />
            </Surface>
          </PreviewSection>
        ) : null}

        {isVisible("section-header") ? (
          <PreviewSection
            description="섹션 타이틀과 액션 배치만 고립해서 확인합니다."
            id="section-header"
            title="SectionHeader"
          >
            <Surface className={canvasCard} padding="md" variant="subtle">
              <SectionHeader
                actions={<Button variant="secondary">Action</Button>}
                description="설명 텍스트가 있을 때 간격과 정렬을 바로 확인할 수 있습니다."
                title="Overlay Controls"
              />
            </Surface>
          </PreviewSection>
        ) : null}

        {isVisible("typography") ? (
          <PreviewSection
            description="전역 타이포그래피 토큰과 실제 프리셋 결과를 한 화면에서 비교합니다."
            id="typography"
            title="Typography"
          >
            <div className={typographyStack}>
              <div className={typographyGrid}>
                {typographyScaleSamples.map((sample) => (
                  <Surface key={sample.id} className={typographyCard} padding="md" variant="subtle">
                    <div className={typographyMeta}>
                      <span className={typographyToken}>{sample.label}</span>
                      <span className={typographySpec}>{sample.spec}</span>
                    </div>
                    <Typography
                      balance={sample.variant === "heading01"}
                      className={typographySample}
                      render={<p />}
                      variant={sample.variant}
                    >
                      {sample.sample}
                    </Typography>
                  </Surface>
                ))}
              </div>

              <div className={typographyGrid}>
                {typographyBodySamples.map((sample) => (
                  <Surface key={sample.id} className={typographyCard} padding="md" variant="subtle">
                    <div className={typographyMeta}>
                      <span className={typographyToken}>{sample.label}</span>
                      <span className={typographySpec}>{sample.spec}</span>
                    </div>
                    <Typography
                      className={cx(
                        typographyBodySample,
                        sample.id === "code-sm" ? typographySample : undefined,
                      )}
                      render={sample.variant === "code01" ? <code /> : <p />}
                      tone={sample.variant === "body03" ? "muted" : "default"}
                      truncate={sample.variant === "label03"}
                      variant={sample.variant}
                    >
                      {sample.sample}
                    </Typography>
                  </Surface>
                ))}
              </div>
            </div>
          </PreviewSection>
        ) : null}

        {isVisible("layout") ? (
          <PreviewSection
            description="Box, Flex, Grid 유틸리티의 최소 샘플입니다."
            id="layout"
            title="Layout Utilities"
          >
            <div className={utilityGrid}>
              <Box className={utilityBlock} p={4}>
                <p className={metaText}>Box</p>
                <p className={metaText}>spacing과 sizing을 직접 지정하는 기본 래퍼</p>
              </Box>
              <Flex className={utilityBlock} alignItems="center" gap={3} justifyContent="space-between" p={4}>
                <div>
                  <p className={metaText}>Flex</p>
                  <p className={metaText}>행 단위 정렬과 간격 제어</p>
                </div>
                <Button size="md" variant="secondary">
                  Action
                </Button>
              </Flex>
              <Grid className={utilityBlock} gap={3} gridTemplateColumns={2} p={4}>
                <div>
                  <p className={metaText}>Grid</p>
                  <p className={metaText}>반복적인 카드 배열과 밀도 조정</p>
                </div>
                <Surface padding="sm" variant="card">
                  <p className={metaText}>Nested item</p>
                </Surface>
              </Grid>
            </div>
          </PreviewSection>
        ) : null}
      </div>
    </main>
  );
}
