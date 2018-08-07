
panel.plugin("wottpal/last-edited", {
  fields: {
    lastEdited: {

      props: {
        value: String,
      },

      template: `
      <k-date-field v-model="value" v-bind="$attrs" @input="onInput()" ref="input" icon="clock" disabled="true" label:="$t('lastedited')" />
      `

    }
  }
});
