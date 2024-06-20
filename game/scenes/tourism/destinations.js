/*
ngamba_island
ssese_islands
equator
source_of_the_nile
rwenzori
bwindi_impenetrable_national_park
kibale_national_park
kidepo_valley_national_park
lake_mburo_national_park
mgahinga_gorilla_national_park
mount_elgon_national_park
murchison_falls_national_park
queen_elizabeth_national_park
semuliki_national_park
ajai_reserve
bokora_reserve
bugungu_reserve
kabwoya_reserve
karuma_reserve
katonga_reserve
kigezi_reserve
kyambura_reserve
matheniko_reserve
pian_upe_reserve
toro_semliki_reserve
ziwa_rhino_sanctuary
*/

class TemplateScene extends Scene {
    constructor() {
      super('template-scene');
    }
  
    preload() {
      // preload assets
    }
  
    create() {
      // render scene
      this.cameras.main.setBackgroundColor(0x2299CC);
    }
}
