import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
// import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AdminRoutingModule } from "./admin-routing.module";
// import { ComponentsModule } from "../shared/components/components.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // chartjsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    // ComponentsModule,
    SharedModule
  ],
})
export class AdminModule {}
