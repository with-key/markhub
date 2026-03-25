import { useState } from "react";

import {
  AlertDialog,
  AppShell,
  Button,
  Checkbox,
  Combobox,
  Dialog,
  Menu,
  RadioGroup,
  SectionHeader,
  Select,
  Surface,
  Switch,
} from "@/components";
import {
  CheckIcon,
  ChevronDownIcon,
  CircleIcon,
  CloseIcon,
} from "@/components/shared/icons";
import { list, popup, positioner } from "@/components/shared/control.css";
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
                이 작업은 연결된 문서 링크를 모두 정리하며, 자동 복구되지 않습니다.
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

export default function ComponentsPage() {
  const [selectedStage, setSelectedStage] = useState<string | null>("planning");
  const [selectedTool, setSelectedTool] = useState<string | null>("github");
  const [reviewMode, setReviewMode] = useState("balanced");
  const [watchingUpdates, setWatchingUpdates] = useState(true);
  const [sharingDocs, setSharingDocs] = useState(false);
  const [showPriorityOnly, setShowPriorityOnly] = useState(true);
  const [menuSort, setMenuSort] = useState("updated");

  return (
    <AppShell
      currentPath="/components"
      description="base-ui 기반의 공통 입력/오버레이 컴포넌트를 한 페이지에서 확인합니다."
      eyebrow="Design System"
      title="Component Gallery"
    >
      <div style={{ display: "grid", gap: 24 }}>
        <Surface as="section">
          <SectionHeader
            description="조용하고 읽기 쉬운 톤을 유지하면서도, 선택과 확인 동작은 분명하게 보이도록 설계했습니다."
            title="Selection Controls"
          />

          <div style={{ display: "grid", gap: 18, marginTop: 20 }}>
            <Select
              description="현재 작업이 어느 단계에 있는지 한 번에 분류합니다."
              items={selectItems}
              label="현재 단계"
              onValueChange={setSelectedStage}
              value={selectedStage}
            />

            <Combobox
              description="연결할 외부 툴을 빠르게 검색합니다."
              items={comboboxItems}
              label="연동 도구"
              onValueChange={setSelectedTool}
              value={selectedTool}
            />

            <RadioGroup
              description="리뷰 강도를 팀 상황에 맞춰 조절합니다."
              label="검토 모드"
              onValueChange={setReviewMode}
              options={[
                { value: "fast", label: "Fast", description: "핵심 이슈만 빠르게 훑습니다." },
                { value: "balanced", label: "Balanced", description: "일반적인 검토 기본값입니다." },
                { value: "strict", label: "Strict", description: "배포 전 수준으로 세밀하게 확인합니다." },
              ]}
              value={reviewMode}
            />

            <div style={{ display: "grid", gap: 14 }}>
              <Checkbox
                checked={sharingDocs}
                description="프로젝트 문서를 관련 참여자 전원에게 자동 공유합니다."
                label="문서 공유 자동화"
                onCheckedChange={setSharingDocs}
              />
              <Switch
                checked={watchingUpdates}
                description="변경 사항이 생기면 요약 알림을 보냅니다."
                label="업데이트 감시"
                onCheckedChange={setWatchingUpdates}
              />
            </div>
          </div>
        </Surface>

        <Surface as="section">
          <SectionHeader
            description="팝업 계열 컴포넌트는 같은 표면 언어를 유지하되, 의사결정 강도에 따라 밀도를 다르게 가져갑니다."
            title="Overlay Controls"
          />

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <Menu.Root modal={false}>
              <Menu.Trigger className={menuTrigger} render={<Button variant="secondary" />}>
                Quick Actions
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
                          <span className={menuItemDescription}>현재 컨텍스트 기준으로 초안 생성</span>
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

            <DialogPreview />

            <AlertDialogPreview />
          </div>
        </Surface>
      </div>
    </AppShell>
  );
}
