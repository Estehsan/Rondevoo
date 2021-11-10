import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="904.36151" height="586.40556" viewBox="0 0 904.36151 586.40556" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M176.48137,606.86124c4.48183-45.74693,31.57027-91.41208,74.6711-107.3851a211.78287,211.78287,0,0,0,3.80025,145.35351c7.15367,17.90139,16.97423,37.0672,11.16353,55.44857-3.61532,11.43741-12.95662,20.35944-23.50968,26.061-10.55372,5.7016-22.35566,8.59565-34.01041,11.43411l-2.257,1.96793C186.63718,698.21181,171.99953,652.60817,176.48137,606.86124Z" transform="translate(-147.81924 -156.79722)" fill="#f0f0f0"/><path d="M251.6065,500.32709c-24.3354,28.72351-39.652,65.40748-42.33,103.01475-.579,8.1306-.4587,16.42884,1.52256,24.37642a44.70919,44.70919,0,0,0,11.65642,20.44014c5.15372,5.37408,11.04774,10.27436,14.80536,16.80764,3.96072,6.88643,4.31282,14.819,1.91945,22.30586-2.92836,9.1604-8.97355,16.7223-15.14224,23.91176-6.84915,7.98252-14.08974,16.16536-16.818,26.58246-.33057,1.26217-2.26971.67544-1.93964-.58483,4.74673-18.124,21.94191-28.79677,29.84688-45.21542,3.6886-7.66125,5.09074-16.48052,1.23988-24.36584-3.36741-6.89536-9.44106-11.95377-14.70634-17.35-5.52863-5.66617-9.81771-11.92932-12.14213-19.56139-2.37774-7.80719-2.8227-16.11821-2.45413-24.22795a175.619,175.619,0,0,1,11.43083-53.68534,184.22708,184.22708,0,0,1,31.73151-53.93217c.84063-.99221,2.21479.49823,1.37966,1.48395Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M209.502,591.07182a27.15836,27.15836,0,0,1-21.40734-27.90091,1.01382,1.01382,0,0,1,2.02582.0483,25.148,25.148,0,0,0,19.96635,25.913c1.27568.26837.68355,2.20648-.58483,1.93965Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M219.48341,645.77769a52.34557,52.34557,0,0,0,22.58173-30.7462c.335-1.261,2.27427-.67461,1.93964.58483a54.44728,54.44728,0,0,1-23.56337,31.94644c-1.10563.69542-2.05763-1.09342-.958-1.78507Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M227.84859,534.9895a15.37292,15.37292,0,0,0,14.54413-1.119c1.09627-.70909,2.04714,1.08059.958,1.78507a17.22664,17.22664,0,0,1-16.087,1.27357,1.047,1.047,0,0,1-.67741-1.26224,1.01808,1.01808,0,0,1,1.26224-.67741Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M385.83271,577.46554c-.67194.46224-1.34388.92448-2.0162,1.40385a202.453,202.453,0,0,0-25.35041,20.8777c-.61791.58057-1.23537,1.17825-1.83531,1.77536a213.4309,213.4309,0,0,0-44.68323,64.63776,207.26687,207.26687,0,0,0-10.58392,29.66048c-3.82564,14.00525-6.85927,29.49489-14.85286,41.07746a35.55812,35.55812,0,0,1-2.68,3.49066L208.915,742.34206c-.17248-.081-.34535-.145-.51867-.226l-2.98759.21475c.10637-.533.22814-1.0835.33451-1.61649.06041-.30943.13752-.6193.19793-.92874.04557-.20642.092-.413.12128-.60186.01491-.06876.03065-.13755.046-.18932.02931-.18888.0766-.36121.10636-.533q1.00829-4.61864,2.085-9.23916c-.00044-.01711-.00044-.01711.0158-.03465,5.5293-23.45682,13.06545-46.65811,23.88353-67.978.32569-.64133.6501-1.29975,1.01-1.942A197.78,197.78,0,0,1,250.266,631.86718a174.84769,174.84769,0,0,1,11.29281-13.61835,145.39679,145.39679,0,0,1,35.6617-28.19346c26.4996-14.88715,57.46538-21.13354,86.4069-13.21642C384.36766,577.042,385.092,577.24538,385.83271,577.46554Z" transform="translate(-147.81924 -156.79722)" fill="#f0f0f0"/><path d="M385.68908,578.42077c-36.724,8.28252-71.03976,28.35094-95.82017,56.7659-5.35746,6.14324-10.25754,12.84133-13.46061,20.37989a44.70911,44.70911,0,0,0-2.99937,23.33828c.87939,7.39379,2.63513,14.855,1.70188,22.33381-.98369,7.88305-5.47849,14.42874-11.89708,18.96561-7.85333,5.551-17.23287,7.94913-26.48677,9.97554-10.27469,2.24993-20.98253,4.42413-29.43272,11.099-1.02386.80875-2.2189-.82722-1.19659-1.63475,14.70188-11.61312,34.857-9.78206,51.05387-18.1321,7.55775-3.89629,13.98709-10.0938,15.65989-18.70826,1.4628-7.533-.34116-15.22859-1.29626-22.70727-1.00288-7.85274-.65662-15.43583,2.0825-22.92908,2.802-7.66517,7.4505-14.56894,12.62741-20.82222a175.61909,175.61909,0,0,1,41.44916-35.98259A184.22707,184.22707,0,0,1,385.481,576.40527c1.26856-.28611,1.46841,1.73126.20813,2.0155Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M297.43643,625.52556a27.15837,27.15837,0,0,1-.29429-35.166c.839-.99754,2.42856.25939,1.58843,1.25826a25.14805,25.14805,0,0,0,.34061,32.71117c.857.98232-.78267,2.17329-1.63475,1.19659Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M272.46929,675.21461a52.34551,52.34551,0,0,0,36.54158-10.95336c1.02669-.80509,2.222.83063,1.19659,1.63475a54.44724,54.44724,0,0,1-38.048,11.32067c-1.30148-.11041-.98459-2.11187.30982-2.00206Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M345.85055,591.79286a15.373,15.373,0,0,0,12.28639,7.86312c1.30223.09386.98393,2.09531-.30983,2.00206a17.22664,17.22664,0,0,1-13.61131-8.66859,1.047,1.047,0,0,1,.21908-1.41567,1.01807,1.01807,0,0,1,1.41567.21908Z" transform="translate(-147.81924 -156.79722)" fill="#fff"/><path d="M825.52225,196.935c-1.11853-3.30279-15.14533-14.52982-6.55011-16.41685l7.04864,9.39857,32.40662-32.406,3.25928,3.2593Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M825.52225,307.129c-1.11853-3.30276-15.14533-14.52982-6.55011-16.41684l7.04864,9.39859,32.40662-32.406,3.25928,3.25928Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M825.52225,418.89715c-1.11853-3.30277-15.14533-14.52979-6.55011-16.41684l7.04864,9.39859,32.40662-32.406,3.25928,3.25928Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><circle cx="647.86176" cy="161.73826" r="10" fill="#3f3d56"/><circle cx="647.86176" cy="52.73826" r="10" fill="#3f3d56"/><rect x="743.36151" y="29.73819" width="161" height="2" fill="#3f3d56"/><circle cx="652.86176" cy="277.93224" r="10" fill="#3f3d56"/><rect x="743.36151" y="139.93202" width="161" height="2" fill="#3f3d56"/><rect x="743.36151" y="251.70009" width="161" height="2" fill="#3f3d56"/><polygon points="702.96 277 652.96 277 652.96 226 686.96 226 686.96 228 654.96 228 654.96 275 700.96 275 700.96 252 702.96 252 702.96 277" fill="#3f3d56"/><polygon points="702.96 165 652.96 165 652.96 114 686.96 114 686.96 116 654.96 116 654.96 163 700.96 163 700.96 140 702.96 140 702.96 165" fill="#3f3d56"/><polygon points="702.96 51 652.96 51 652.96 0 686.96 0 686.96 2 654.96 2 654.96 49 700.96 49 700.96 26 702.96 26 702.96 51" fill="#3f3d56"/><path d="M524.324,338.56887s-13.36292,56.4212,2.96954,56.4212S582.23,331.145,582.23,331.145L568.867,314.81255l-23.985,33.29993-1.2561-16.96747Z" transform="translate(-147.81924 -156.79722)" fill="#a0616a"/><circle cx="430.84992" cy="163.80056" r="13" fill="#a0616a"/><polygon points="365.175 566.048 382.478 566.047 390.711 499.301 365.171 499.302 365.175 566.048" fill="#a0616a"/><path d="M512.38428,740.89682l53.2129-.002v-.673a20.71307,20.71307,0,0,0-20.71194-20.71162H544.884l-9.72-7.37412-18.13541,7.37524-4.64513.00016Z" transform="translate(-147.81924 -156.79722)" fill="#2f2e41"/><polygon points="179.038 544.459 194.521 552.185 231.693 496.14 208.841 484.736 179.038 544.459" fill="#a0616a"/><path d="M318.25035,717.13553l47.61317,23.76129.30052-.60213a20.71307,20.71307,0,0,0-9.28291-27.781l-.00115-.00057-5.404-10.93862-19.52019-1.49967-4.15631-2.07422Z" transform="translate(-147.81924 -156.79722)" fill="#2f2e41"/><rect y="584.16484" width="569.84992" height="2.24072" fill="#ccc"/><path d="M401.1174,440.9251s-6.91528,83.1485-8.4,100.9657a126.70952,126.70952,0,0,1-7.42383,32.66492s-2.96954,5.93908-2.96954,11.87817l-33.65482,61.16389s-10.28424,7.55932-8.7995,13.4984-6.2005,9.5016-6.2005,9.5016l35.44159,6.83086s-1.48477-4.45428,2.96954-5.93908,8-14.36292,8-14.36292l49.75629-81.08612L465.471,501.80209s20.78677,66.8146,25.24106,74.23843c0,0,16.33246,83.147,19.302,90.57092s4.45432,7.42383,2.96954,10.39337-1.48477,5.93909,0,7.42383,29.69538,0,29.69538,0l-7.42386-105.41858L521.89224,452.80465l-68.29937-20.78677Z" transform="translate(-147.81924 -156.79722)" fill="#2f2e41"/><circle cx="320.16699" cy="54.45159" r="31.18014" fill="#a0616a"/><path d="M524.86176,287.99532l-37.118-22.48858s-1.02884-13.9648-11.60471-14.6219c-5.30952-.32989-13.27738-.83427-25.23451-1.6052-2.527-.16293-4.23227,13.66223-7.12824,13.47462l-39.18082,10.39338,5.93909,100.96426s-8.9086,40.08878-5.93909,47.5126-7.42383,10.39338-4.45432,11.87815,0,11.87814,0,11.87814,57.906,29.69537,121.751,7.42383l-5.93909-19.302a15.58023,15.58023,0,0,0-2.96954-14.84769s5.93909-8.9086-1.48477-16.33246c0,0,2.96954-13.36291-4.45432-19.302l-1.48477-20.78677,4.45432-10.39338Z" transform="translate(-147.81924 -156.79722)" fill="#e6e6e6"/><path d="M440.9299,229.06116l-.87158-2.02441c-.1123-.26172-11.13916-26.32911-1.36523-42.40821,4.52441-7.44384,12.75146-11.64648,24.45166-12.49023,18.30713-1.32373,30.83691,3.019,37.251,12.89844a11.07543,11.07543,0,0,1-9.335,17.061h-.24609l-3.36377-4.36767-.1958.4248c-1.21778,2.63477-4.01465,4.07715-7.29053,3.76123-.55713-.04-1.05078.44092-1.44726,1.47022a2.61528,2.61528,0,0,1-1.95752,1.814c-2.42041.47119-5.87061-2.57764-7.415-4.09717a2.47811,2.47811,0,0,1-1.15528,1.70117c-1.62744.939-4.16015-.28759-4.8872-.67822-5.79151,1.23047-9.54053.90137-11.14649-.97705-1.08887,7.70361-3.42578,21.56982-6.228,22.33838a1.40089,1.40089,0,0,1-1.52929-.66846c-.67481-.876-1.27783-1.3125-1.6543-1.18994-.91162.29-1.44971,3.292-1.52685,5.22949Z" transform="translate(-147.81924 -156.79722)" fill="#2f2e41"/><path d="M508.5293,289.48013l14.81131-2.40638a72.31352,72.31352,0,0,1,20.82315,38.04084c4.45431,23.75628,5.939,28.2106,5.939,28.2106l-35.63443,8.90857-19.302-37.11924Z" transform="translate(-147.81924 -156.79722)" fill="#e6e6e6"/><rect x="496.82503" y="270.45449" width="116.39452" height="234.31056" transform="translate(-22.85274 753.63479) rotate(-85.48966)" fill="#fff"/><path d="M467.762,329.3696c-5.71637-4.08217-12.974-4.37733-15.74644-4.31865.84581,2.64018,3.47435,9.41156,9.19058,13.49552,5.73028,4.09245,12.97891,4.37863,15.74716,4.32149C476.10786,340.22872,473.47911,333.45457,467.762,329.3696Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M490.31257,403.20446l-37.507-2.95868a8.4653,8.4653,0,1,0-1.33141,16.87817h0l37.507,2.95868a8.4653,8.4653,0,0,0,1.33141-16.87817Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M667.1829,327.52712l-210.29-16.59005a18.68264,18.68264,0,0,0-20.0917,17.15915L428.71374,430.547a18.69345,18.69345,0,0,0,17.16161,20.1014l210.29,16.59006a18.68261,18.68261,0,0,0,20.0917-17.15915l7.68556-97.37532.15463-1.98944.24481-3.09575A18.68267,18.68267,0,0,0,667.1829,327.52712Zm-6.20967,89.13782-1.33248,16.87858a11.31529,11.31529,0,0,1-12.14159,10.36082l-28.13346-2.21676A11.31528,11.31528,0,0,1,609.00488,429.546l1.33252-16.87865A11.31941,11.31941,0,0,1,622.479,402.30651l28.12371,2.21931A11.32876,11.32876,0,0,1,660.97323,416.66494ZM441.83967,407.8638a10.34611,10.34611,0,0,1,11.11422-9.49093l37.50561,2.96061a10.34238,10.34238,0,1,1-1.60873,20.6221l-.01934.00492-37.50561-2.96061A10.334,10.334,0,0,1,441.83967,407.8638Zm8.02924-83.48172-.25639-1.04919,1.0789-.09888c.42182-.04533,10.39871-.941,18.16489,4.60653,7.76627,5.5476,10.14774,15.28086,10.25123,15.688l.24673,1.05158-1.07643.10859a28.42311,28.42311,0,0,1-4.589-.03035,27.13718,27.13718,0,0,1-13.57847-4.58588C452.34423,334.52489,449.96268,324.79159,449.86891,324.38208Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M629.4225,427.85879l-12.18974-.96157a3.29206,3.29206,0,0,0-.51776,6.56372l12.18973.96157a3.29206,3.29206,0,0,0,.51777-6.56372Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M651.92674,429.634l-12.18979-.96157a3.29206,3.29206,0,0,0-.51777,6.56371l12.1898.96157a3.29206,3.29206,0,0,0,.51776-6.56371Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M630.0882,419.4197l-12.18973-.96156a3.29206,3.29206,0,0,0-.51777,6.56371l12.18973.96157a3.29206,3.29206,0,0,0,.51777-6.56372Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M652.59245,421.19491l-12.1898-.96157a3.29206,3.29206,0,0,0-.51776,6.56372l12.18979.96157a3.29206,3.29206,0,0,0,.51777-6.56372Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M630.7539,410.98062l-12.18973-.96157a3.29206,3.29206,0,0,0-.51777,6.56372l12.18973.96156a3.29206,3.29206,0,0,0,.51777-6.56371Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><path d="M653.25815,412.75583l-12.18979-.96157a3.29206,3.29206,0,0,0-.51777,6.56371l12.18979.96157a3.29206,3.29206,0,0,0,.51777-6.56371Z" transform="translate(-147.81924 -156.79722)" fill="#ffffff"/><rect x="556.02303" y="247.30876" width="2.0007" height="247.61314" transform="translate(-4.39383 740.56745) rotate(-85.50837)" fill="#fff"/><polygon points="536.278 193.917 536.123 195.907 527.532 195.233 435.999 188.043 436.164 186.051 527.687 193.243 536.278 193.917" fill="#3f3d56"/><path d="M382.324,329.56887s-13.36292,56.4212,2.96954,56.4212S440.23,322.145,440.23,322.145L426.867,305.81255l-23.985,33.29993-1.2561-16.96747Z" transform="translate(-147.81924 -156.79722)" fill="#a0616a"/><circle cx="288.84992" cy="154.80056" r="13" fill="#a0616a"/><path d="M415.41156,282.05627l-8.90863-8.9086s-17.81723,10.39337-19.302,20.78677-8.9086,43.05829-8.9086,43.05829l27.46823,2.22714,8.9086-13.36291Z" transform="translate(-147.81924 -156.79722)" fill="#e6e6e6"/></svg>`;

export default () => <SvgXml xml={xml} width="70%" height="70%" />;
