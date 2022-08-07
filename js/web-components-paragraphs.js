import 'https://unpkg.com/@gdwc/components/dist/components.umd';
import { html } from 'https://unpkg.com/lit-html@2.2.7/lit-html.js?module';
const GDWCCard = customElements.get("gdwc-card");

export class GdwcCardExtended extends GDWCCard {
  render() {
    return html`
      <div class="gdwc-card">
        <slot name="field_image"></slot>
        <div class="gdwc-card__body">
          <h2><slot name="field_title"></slot></h2>
          <div>
            <slot name="field_body"></slot>
            <slot name="field_link"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.get('gdwc-card-extended') ||
  customElements.define('gdwc-card-extended', GdwcCardExtended);