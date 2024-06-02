var layout_opts = spread_opts

var breadthfirst_opts = {
    name: 'breadthfirst',
    padding: 30,
    circle: true,
    spacingFactor: 1.75
}

var concentric_opts = {
    name: 'concentric',
    padding: 60
}

var clusters = [["afro-asiatic","austronesian","bangime","berta","central-sudanic","dogon","eastern-sudanic","fur","gumuz","hadza","ijoid","indo-european","kadu","khoe-kwadi","koman","kordofanian","kunama","kxa","laal","maban","mande","niger-congo","saharan","sandawe","shabo","siamou","songhay","tu","other"],["adamawa-ubangi","benue-congo","chadic","cushitic","kwa","mel","nilotic","north-central-atlantic","omotic","surmic"],["=|hoan","agneby","avikam-alladian","baatonum","bantu","barito","beboid","beja","benue-congo-plateau","berber","birri","biu-mandara","bongo-bagirmi","bua","cangin","central-cushitic","central-delta","central-kainji","creoles-and-pidgins","dahalo","daju","day","defoid","dizoid","east-chadic","eastern-jebel","eastern-mande","eastern-nilotic","eastern-saharan","edoid","egyptian-coptic","ekoid-mbe","ga-dangme","gade","gbaya-manza-ngbaka","gbe","germanic","gola","grusi","heiban","highland-east-cushitic","idomoid","igboid","jaad","jola","ju-kung","jukunoid","ka-togo","kadugli","katla-tima","kim","kirma-tyurama","koromfe","kresh","kru","kuliak","lafofa","lendu","lobiri-jaane","lower-cross","lowland-east-cushitic","majang","mamfe","mangbetu","mangbutu-efe","manjaku","masa","mbumic","moru-ma'di","mumuye-yandang","na-togo","nara","northern-mel","nubian","nupoid","nyimang","ogonoid","oti-volta","peul-serer","rashad","samba-duru","semitic","senufo","sign-languages","south-omotic","south-surmic","southern-cushitic","southern-mel","southern-nilotic","ta-ne-omotic","talodi","taman","tano","temein","tenda","tikar","tivoid","tusia","ubangi","upper-cross","west-chadic","western-mande","western-nilotic","western-saharan","wide-grassfields","wolof"],["aaa","aal","aar","abb","abi","ach","adj","ads","aeb","afn","afr","agb","agh","agq","ahg","ahp","aiw","aja","ajg","aka","akw","ald","amf","amh","amo","anc","ank","ann","anu","any","aoa","arv","ary","arz","asa","avi","avn","avu","awn","axk","ayl","bag","bam","bas","bav","baw","bax","bba","bbo","bci","bcq","bcs","bcw","bde","bdh","bdm","bds","bdu","bej","bem","beq","bev","bex","bfa","bfd","bib","bid","bif","bim","bin","bip","bji","bkc","bkm","bli","bmi","bng","bni","bol","bom","bot","boz","bqc","bqp","bri","brm","bsc","bsp","bsw","bud","buf","bum","buu","bvb","bvq","bvx","bwo","bwr","bwu","bxk","byn","bza","cgg","cko","cla","cme","cop","cou","daa","dag","dai","daj","dal","dau","dav","dba","dbq","dds","deg","dga","dgl","dic","did","dim","din","diz","dje","djm","dma","dnj","doo","dow","dsh","dto","dts","dua","dur","dwr","dyi","dyo","dyu","efi","ega","eko","ema","emk","enn","ets","etu","ewe","ewo","fap","ffm","fia","fmp","fon","fub","fuc","fuf","fuh","fuu","fuv","fvr","gaa","gax","gaz","gbp","gbr","gde","gdf","gdm","ged","gey","ghl","gid","gis","gkn","glj","gmm","gmv","goa","god","gol","gow","gqa","grj","grr","gru","guk","gur","guw","gux","guz","gwd","gya","hae","har","hau","hay","hbb","heh","hem","her","hia","hke","hna","hnh","hoo","hts","huc","ibb","ibo","idu","ifm","igb","ige","ijc","ikx","ilb","irk","isi","iso","its","izr","izz","jbu","jek","jle","jnj","kab","kah","kam","kao","kbl","kbp","kbr","kcg","kck","kcm","kcn","kcr","kcu","kcv","kde","kdh","kdj","kdm","ken","ker","kfz","kgo","khq","kia","kik","kin","kki","kkw","klu","kma","kna","knc","knf","kng","knk","knw","kny","koe","kot","kpk","kpo","kpz","kqy","kqz","krs","ksb","ksf","ksq","kss","kst","ktu","ktz","kun","kwn","kyq","kza","laf","lag","laj","lam","lch","lea","led","lee","lef","les","lgg","lin","liy","lkr","lln","lme","lnb","lns","lob","log","lok","lol","lom","loz","lua","lub","lue","lug","lun","luo","luy","lwo","mas","maw","mcn","mcp","mcs","mda","mdd","mde","mdi","mdj","mdm","mdq","mdt","mdw","mdx","mdy","mei","men","mev","mey","mfc","mfe","mfv","mgd","mge","mgh","mgr","mgw","mhd","mhi","mhk","mif","mkf","mlq","mls","mmy","mnf","mnk","moj","mor","mos","moy","moz","mpe","mpk","mrt","msj","mtk","mua","mug","muh","mur","muz","mwe","mxu","mxx","myb","mye","mym","mzb","mzm","naq","nbm","ncu","nde","ndi","ndo","ndt","ndv","ndz","ney","nfr","nga","ngb","ngc","nge","ngi","nhb","nhr","nhu","nie","nih","niq","niy","nko","nmd","nmg","nmn","nnb","now","nrb","nse","nso","ntm","nto","nup","nus","nuv","nya","nyi","nyj","nym","nyn","nyo","nyp","nzk","ogb","ogo","ogu","oku","old","otr","oua","pbi","pbr","pcm","pip","pko","plt","pov","poy","pqa","pre","pym","ras","rel","rif","rim","rng","rou","run","sad","sag","sba","sbf","sbs","sef","seh","sen","ses","sgw","shg","shi","shj","shk","shu","shy","sid","sif","sil","siz","sjg","sna","snf","snk","snq","som","sop","sot","spp","sqt","ssn","ssw","ssy","sub","suk","suq","sur","sus","swb","swh","szg","tag","tan","tap","taq","tbi","tcc","tem","teo","teq","teu","tex","thv","thz","tig","tik","tir","tiv","tlj","tll","tlo","tma","tmc","tms","toi","tpm","tsn","tso","tsv","ttr","tui","tuv","tvu","tza","tzm","udl","ugn","umb","urh","vag","vai","ven","vif","wal","wan","wbj","wem","wib","wob","wol","wti","wwa","xam","xed","xho","xki","xnz","xom","xon","xpe","xsm","xtc","xuo","xuu","xwg","yaf","yam","yao","yas","ybb","yer","yey","yky","yns","yom","yor","yul","zag","zay","zen","zga","zmq","zne","zul"]]

// https://github.com/iVis-at-Bilkent/cytoscape.js-cise
var cise_opts = {
    name: 'cise',
    clusters: clusters
}

// https://github.com/cytoscape/cytoscape.js-cola
var cola_opts = {
    name: 'cola',
    nodeSpacing: function( node ){ return 10; },
    randomize: true
}

var cose_opts = {
    name: 'cose',
    componentSpacing: 40,
    nodeOverlap: 4,
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1000,
    initialTemp: 1000,
    coolingFactor: 0.99,
    minTemp: 1.0
}

// https://github.com/cytoscape/cytoscape.js-cose-bilkent
var cose_bilkent_opts = {
    name: 'cose-bilkent',
    quality: 'proof',
    padding: 30,
    idealEdgeLength: 90
}

https://github.com/iVis-at-Bilkent/cytoscape.js-fcose
var fcose_opts = {
    name: 'fcose',
    quality: "proof",
    padding: 60,
    nodeSeparation: 110,
    idealEdgeLength: 90
}

// http://www.eclipse.org/elk/reference.html
var elk_force_opts = {
    name: 'elk',
    elk: {
      algorithm: 'force',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_layered_opts = {
    name: 'elk',
    elk: {
      algorithm: 'layered',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_mrtree_opts = {
    name: 'elk',
    elk: {
      algorithm: 'mrtree',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_radial_opts = {
    name: 'elk',
    elk: {
        algorithm: 'radial',
        'spacing.nodeNode': 60,
        'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_rectpacking_opts = {
    name: 'elk',
    elk: {
        algorithm: 'rectpacking',
        'spacing.nodeNode': 60,
        'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_stress_opts = {
    name: 'elk',
    elk: {
      algorithm: 'stress',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

// https://github.com/cytoscape/cytoscape.js-euler
var euler_opts = {
    name: "euler",
    springLength: edge => 100
}

var hyse_opts = {
    name: "hyse"
}

var klay_opts = {
    name: 'klay',
    klay: {
        aspectRatio: 1.78,
        edgeRouting: 'ORTHOGONAL', // POLYLINE, ORTHOGONAL, SPLINES)
        fixedAlignment: 'BALANCED',
        nodeLayering:'NETWORK_SIMPLEX',
        nodePlacement:'BRANDES_KOEPF',
        spacing: 60,
        thoroughness: 10
    }
}

// https://github.com/cytoscape/cytoscape.js-spread
var spread_opts = {
    name: 'spread',
    minDist: 40,
    prelayout: { name: 'cola' }
}

var tidytree_opts = { 
    name: 'tidytree',
    horizontalSpacing: 60,
    verticalSpacing: 40 
};

function set_layout(l) {
    console.log(l)
    switch (l) {
        case "breadthfirst":
            layout_opts = breadthfirst_opts;
            break;
        case "cise":
            layout_opts = cise_opts;
            break;
        case "cola":
            layout_opts = cola_opts;
            break;
        case "cose":
            layout_opts = cose_opts;
            break;
        case "cose-bilkent":
            layout_opts = cose_bilkent_opts;
            break;
        case "fcose":
            layout_opts = fcose_opts;
            break;
        case "concentric":
            layout_opts = concentric_opts;
            break;
        case "force":
            layout_opts = elk_force_opts;
            break;
        case "euler":
            layout_opts = euler_opts;
            break;
        case "hyse":
            layout_opts = hyse_opts;
            break;
        case "klay":
            layout_opts = klay_opts;
            break; 
        case "layered":
            layout_opts = elk_layered_opts;
            break;
        case "mrtree":
            layout_opts = elk_mrtree_opts;
            break;
        case "radial":
            layout_opts = elk_radial_opts;
            break;
        case "rectpacking":
            layout_opts = elk_rectpacking_opts;
            break;
        case "spread":
            layout_opts = spread_opts;
            break;
        case "stress":
            layout_opts = elk_stress_opts;
            break;
        case "tidytree":
            layout_opts = tidytree_opts
            break;
        default:
            console.log("invalid layout");
    }

    return layout_opts
}