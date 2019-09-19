<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

<!--  TODO: Fix container, without visualization -->
  <v-container v-else class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="(contrato, index) in wholeResponse"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title primary-title>
            <div>
              <h2>{{contrato.numeroContrato}}</h2>
              <div>{{contrato.aditivo}}</div>
              <div>{{contrato.tipoConsumidor}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },

  mounted () {
    axios
      .get('https://localhost:5001/api/contratos')
      .then(response => {
        this.wholeResponse = response.data.search
        this.loading = false
        console.log(response)
      })
      .catch(onerror => {
        console.log(onerror)
      })
  }
}
</script>

<style scoped>

</style>
