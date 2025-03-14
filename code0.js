gdjs.TitreCode = {};
gdjs.TitreCode.localVariables = [];
gdjs.TitreCode.GDlabelObjects1= [];
gdjs.TitreCode.GDlabelObjects2= [];
gdjs.TitreCode.GDlabelObjects3= [];
gdjs.TitreCode.GDbtnModeCellObjects1= [];
gdjs.TitreCode.GDbtnModeCellObjects2= [];
gdjs.TitreCode.GDbtnModeCellObjects3= [];
gdjs.TitreCode.GDbtnModeTabletteObjects1= [];
gdjs.TitreCode.GDbtnModeTabletteObjects2= [];
gdjs.TitreCode.GDbtnModeTabletteObjects3= [];
gdjs.TitreCode.GDlblAProposObjects1= [];
gdjs.TitreCode.GDlblAProposObjects2= [];
gdjs.TitreCode.GDlblAProposObjects3= [];


gdjs.TitreCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnModeCell"), gdjs.TitreCode.GDbtnModeCellObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitreCode.GDbtnModeCellObjects2.length;i<l;++i) {
    if ( gdjs.TitreCode.GDbtnModeCellObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitreCode.GDbtnModeCellObjects2[k] = gdjs.TitreCode.GDbtnModeCellObjects2[i];
        ++k;
    }
}
gdjs.TitreCode.GDbtnModeCellObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "calcul", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnModeTablette"), gdjs.TitreCode.GDbtnModeTabletteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitreCode.GDbtnModeTabletteObjects1.length;i<l;++i) {
    if ( gdjs.TitreCode.GDbtnModeTabletteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitreCode.GDbtnModeTabletteObjects1[k] = gdjs.TitreCode.GDbtnModeTabletteObjects1[i];
        ++k;
    }
}
gdjs.TitreCode.GDbtnModeTabletteObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "calcul", false);
}}

}


};gdjs.TitreCode.eventsList1 = function(runtimeScene) {

{


gdjs.TitreCode.eventsList0(runtimeScene);
}


};

gdjs.TitreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitreCode.GDlabelObjects1.length = 0;
gdjs.TitreCode.GDlabelObjects2.length = 0;
gdjs.TitreCode.GDlabelObjects3.length = 0;
gdjs.TitreCode.GDbtnModeCellObjects1.length = 0;
gdjs.TitreCode.GDbtnModeCellObjects2.length = 0;
gdjs.TitreCode.GDbtnModeCellObjects3.length = 0;
gdjs.TitreCode.GDbtnModeTabletteObjects1.length = 0;
gdjs.TitreCode.GDbtnModeTabletteObjects2.length = 0;
gdjs.TitreCode.GDbtnModeTabletteObjects3.length = 0;
gdjs.TitreCode.GDlblAProposObjects1.length = 0;
gdjs.TitreCode.GDlblAProposObjects2.length = 0;
gdjs.TitreCode.GDlblAProposObjects3.length = 0;

gdjs.TitreCode.eventsList1(runtimeScene);
gdjs.TitreCode.GDlabelObjects1.length = 0;
gdjs.TitreCode.GDlabelObjects2.length = 0;
gdjs.TitreCode.GDlabelObjects3.length = 0;
gdjs.TitreCode.GDbtnModeCellObjects1.length = 0;
gdjs.TitreCode.GDbtnModeCellObjects2.length = 0;
gdjs.TitreCode.GDbtnModeCellObjects3.length = 0;
gdjs.TitreCode.GDbtnModeTabletteObjects1.length = 0;
gdjs.TitreCode.GDbtnModeTabletteObjects2.length = 0;
gdjs.TitreCode.GDbtnModeTabletteObjects3.length = 0;
gdjs.TitreCode.GDlblAProposObjects1.length = 0;
gdjs.TitreCode.GDlblAProposObjects2.length = 0;
gdjs.TitreCode.GDlblAProposObjects3.length = 0;


return;

}

gdjs['TitreCode'] = gdjs.TitreCode;
