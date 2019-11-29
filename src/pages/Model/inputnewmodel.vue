<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
            <div class="col-1 q-gutter-xl"/>
            <div class="col-1 q-gutter-lg"> <div class="text-h5 text-bold">Model</div> </div>
            <div class="col-1 q-gutter-xl"/>
            <div class="col-1 q-gutter-xl"> <q-icon size="20px" name="home" color="secondary"/></div>
            <div class="col-1 q-gutter-xl"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-1 q-gutter-lg"> <div class="text-subtitle2 text-bold text-secondary">Model</div> </div>
            <div class="col-1 q-gutter-xl"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-2 q-gutter-lg"> <div class="text-subtitle2 text-bold text-negative">Model Form</div> </div>
        </div>

        <div style="height:23px"/>
        
        <q-card>
            <div class="row justify-center">
                <div class="col q-gutter-xl"/>
                <div class="col-11">
                    <div class="column">
                        <div style="height:10px"/>
                        <div class="col-1">
                            <div class="text-h6 text-secondary text-bold">Form Add Model</div>
                        </div>
                        
                        <div style="height:10px"/>
                        
                        <div class="col-1 justify-center">
                            <q-separator color="negative" />
                        </div>
                        
                        <div style="height:15px"/>

                        <div class="col-1">
                            <div class="row">
                                <div class="col-3 input">
                                    <q-input outlined v-model="text" label="Nama Model" />
                                </div>
                                <div class="col-2 input">
                                    <q-input outlined v-model="text" label="Endpoint Tradisional" />
                                </div>
                                <div class="col-2 input">
                                    <q-input outlined v-model="text" label="Endpoint AI" />
                                </div>
                                <div class="col-2 input">
                                    <q-input outlined v-model="text" label="Endpoint BRE" />
                                </div>
                                <div class="col-2 input">
                                    <q-input outlined v-model="text" label="Base Score" />
                                </div>
                                <div class="col-1 input">
                                    <q-input outlined v-model="text" label="Icon" />
                                </div>
                            </div>
                        </div>
                        
                        <div style="height:25px"/>

                        <div class="col-1 flex flex-center">
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
    
}
</script>

<style lang="sass" scoped>
.input
    padding: 3px 

.jarak
    margin-left: 2.5%
    margin-right: 2.5%
</style>