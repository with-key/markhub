import { useState } from "react";

import {
  AlertDialog,
  AppShell,
  CheckboxField,
  ComboboxField,
  Dialog,
  Menu,
  RadioGroupField,
  SectionHeader,
  SelectField,
  Surface,
  SwitchField,
} from "@/components";

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
            <SelectField
              description="현재 작업이 어느 단계에 있는지 한 번에 분류합니다."
              items={selectItems}
              label="현재 단계"
              onValueChange={setSelectedStage}
              value={selectedStage}
            />

            <ComboboxField
              description="연결할 외부 툴을 빠르게 검색합니다."
              items={comboboxItems}
              label="연동 도구"
              onValueChange={setSelectedTool}
              value={selectedTool}
            />

            <RadioGroupField
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
              <CheckboxField
                checked={sharingDocs}
                description="프로젝트 문서를 관련 참여자 전원에게 자동 공유합니다."
                label="문서 공유 자동화"
                onCheckedChange={setSharingDocs}
              />
              <SwitchField
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
            <Menu
              items={[
                { kind: "item", label: "새 에픽 만들기", description: "현재 컨텍스트 기준으로 초안 생성" },
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
              triggerLabel="Quick Actions"
            />

            <Dialog
              bodyText="기획 리뷰 세션을 열면 관련 에픽, 태스크, 문서가 하나의 컨텍스트로 묶입니다."
              title="리뷰 세션 시작"
              triggerLabel="Open Dialog"
            />

            <AlertDialog
              bodyText="이 작업은 연결된 문서 링크를 모두 정리하며, 자동 복구되지 않습니다."
              title="문서를 정말 정리할까요?"
              triggerLabel="Open Alert"
            />
          </div>
        </Surface>
      </div>
    </AppShell>
  );
}
