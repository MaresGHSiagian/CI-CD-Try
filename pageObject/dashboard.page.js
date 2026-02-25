export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardTitle = page.locator("#menu_button_container");
  }

  async verifyDashboard() {
    await this.dashboardTitle.isVisible();
  }
}
