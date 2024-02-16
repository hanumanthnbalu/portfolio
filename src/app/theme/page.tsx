import { ThemeWrapper } from "@/components/common/theme-wrapper";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/common/page-header";
import React from "react";
import { Announcement } from "@/components/common/announcement";
import { ThemeCustomizer } from "@/components/common/theme-customizer";
import { ThemesTabs } from "@/registry/tabs";

export default function about() {
  return (
    <div className="container">
      <ThemeWrapper
        defaultTheme="zinc"
        className="relative flex flex-col items-start md:flex-row md:items-center"
      >
        <PageHeader>
          {/* <Announcement /> */}
          <PageHeaderHeading className="hidden md:block">
            Add colors. Make it yours.
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">
            Make it yours
          </PageHeaderHeading>
          <PageHeaderDescription>
            Hand-picked themes that you can copy and paste into your apps.
          </PageHeaderDescription>
          <PageActions>
            <ThemeCustomizer />
          </PageActions>
        </PageHeader>
      </ThemeWrapper>
      <ThemesTabs />
    </div>
  );
}
