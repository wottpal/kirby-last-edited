
panel.plugin("wottpal/last-edited", {
  fields: {
    lastEdited: {

      props: {
        value: String,
        modified: String,
        source: String
      },

      mounted: function () {
        // Convert Unix-Timestamp to "YYYY-MM-DD HH:MM:SS"
        console.log(this.modified)
        const date = new Date(parseInt(this.modified) * 1000)

        const year = date.getFullYear()
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day = ('0' + date.getDate()).slice(-2)
        const hour = ('0' + date.getHours()).slice(-2)
        const minutes = ('0' + date.getMinutes()).slice(-2)
        const seconds = ('0' + date.getSeconds()).slice(-2)

        this.modified = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
      },

      template: `
      <k-date-field v-if="['metadata', 'field'].includes(this.source)" v-model="this.source == 'field' ? value : modified" v-bind="$attrs" ref="input" icon="clock" disabled="true" label:="$t('lastedited')" />
      `

    }
  }
});
