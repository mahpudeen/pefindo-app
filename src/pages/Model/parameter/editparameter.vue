<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-h5 text-bold">Model</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <q-icon size="20px" name="home" color="secondary" @click="$router.replace('model')"/></div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"><div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-subtitle2 text-bold text-secondary">Parameter</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-subtitle2 text-bold text-negative">Parameter From</div> </div>
        </div>

        <div style="height:23px"/>
        
        <q-card>
            <div class="row justify-center">
                <div class="col q-gutter-xl"/>
                <div class="col-11">
                    <div class="column">
                        <div style="height:20px"/>
                        <div class="col-1">
                            <div class="text-h6 text-secondary text-bold">Form Add Model</div>
                        </div>
                        
                        <div style="height:10px"/>
                        
                        <div class="col-1 justify-center">
                            <q-separator color="negative" />
                        </div>
                        
                        <div style="height:15px"/>

                        <div class="col-1">
                            <div class="column">
                                <div class="col input">
                                    <q-input outlined v-model="text" label="Parameter" />
                                </div>
                                <div class="col input">
                                    <q-input outlined v-model="text" label="Label" />
                                </div>
                                <div class="col input">
                                    <q-select outlined v-model="model" :options="options" label="Base Score" />
                                </div>
                                <div class="col input">
                                    <q-select outlined v-model="model" :options="options" label="Is Web ? " />
                                </div>
                            </div>
                        </div>
                        
                        <div style="height:10px"/>

                        <div class="col-1 self-end input">
                            <div class="q-gutter-md">
                                <q-btn color="secondary" text-color="white" label="Create"/>
                                <q-btn color="white" text-color="black" label="Cancel"/>
                            </div>
                        </div>

                        
                        <div style="height:25px"/>

                    </div>
                </div>
                <div class="col q-gutter-xl"/>
            </div>
        </q-card>
        
    </div>
</template>

<script>
export default {
    data () {
    return {
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.input
    padding: 10px 

.jarak
    margin-left: 2.5%
    margin-right: 2.5%
</style>