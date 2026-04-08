// ======================= 色板库 =======================
const COLOR_PALETTE = [
    { id: "A1", hex: "#FAF4C8" }, { id: "A10", hex: "#F77C31" }, { id: "A11", hex: "#FFDD99" }, { id: "A12", hex: "#FE9F72" }, { id: "A13", hex: "#FFC365" },
    { id: "A14", hex: "#FD543D" }, { id: "A15", hex: "#FFF365" }, { id: "A16", hex: "#FFFF9F" }, { id: "A17", hex: "#FFE36E" }, { id: "A18", hex: "#FEBE7D" },
    { id: "A19", hex: "#FD7C72" }, { id: "A2", hex: "#FFFFD5" }, { id: "A20", hex: "#FFD568" }, { id: "A21", hex: "#FFE395" }, { id: "A22", hex: "#F4F57D" },
    { id: "A23", hex: "#E6C9B7" }, { id: "A24", hex: "#F7F8A2" }, { id: "A25", hex: "#FFD67D" }, { id: "A26", hex: "#FFC830" }, { id: "A3", hex: "#FEFF8B" },
    { id: "A4", hex: "#FBED56" }, { id: "A5", hex: "#F4D738" }, { id: "A6", hex: "#FEAC4C" }, { id: "A7", hex: "#FE8B4C" }, { id: "A8", hex: "#FFDA45" },
    { id: "A9", hex: "#FF995B" }, { id: "B1", hex: "#E6EE31" }, { id: "B10", hex: "#95D3C2" }, { id: "B11", hex: "#5D722A" }, { id: "B12", hex: "#166F41" },
    { id: "B13", hex: "#CAEB7B" }, { id: "B14", hex: "#ADE946" }, { id: "B15", hex: "#2E5132" }, { id: "B16", hex: "#C5ED9C" }, { id: "B17", hex: "#9BB13A" },
    { id: "B18", hex: "#E6EE49" }, { id: "B19", hex: "#24B88C" }, { id: "B2", hex: "#63F347" }, { id: "B20", hex: "#C2F0CC" }, { id: "B21", hex: "#156A6B" },
    { id: "B22", hex: "#0B3C43" }, { id: "B23", hex: "#303A21" }, { id: "B24", hex: "#EEFCA5" }, { id: "B25", hex: "#4E846D" }, { id: "B26", hex: "#8D7A35" },
    { id: "B27", hex: "#CCE1AF" }, { id: "B28", hex: "#9EE5B9" }, { id: "B29", hex: "#C5E254" }, { id: "B3", hex: "#9EF780" }, { id: "B30", hex: "#E2FCB1" },
    { id: "B31", hex: "#B0E792" }, { id: "B32", hex: "#9CAB5A" }, { id: "B4", hex: "#5DE035" }, { id: "B5", hex: "#35E352" }, { id: "B6", hex: "#65E2A6" },
    { id: "B7", hex: "#3DAF80" }, { id: "B8", hex: "#1C9C4F" }, { id: "B9", hex: "#27523A" }, { id: "C1", hex: "#E8FFE7" }, { id: "C10", hex: "#3EBCE2" },
    { id: "C11", hex: "#28DDDE" }, { id: "C12", hex: "#1C334D" }, { id: "C13", hex: "#CDE8FF" }, { id: "C14", hex: "#D5FDFF" }, { id: "C15", hex: "#22C4C6" },
    { id: "C16", hex: "#1557A8" }, { id: "C17", hex: "#04D1F6" }, { id: "C18", hex: "#1D3344" }, { id: "C19", hex: "#1887A2" }, { id: "C2", hex: "#A9F9FC" },
    { id: "C20", hex: "#176DAF" }, { id: "C21", hex: "#BEDDFF" }, { id: "C22", hex: "#67B4BE" }, { id: "C23", hex: "#C8E2FF" }, { id: "C24", hex: "#7CC4FF" },
    { id: "C25", hex: "#A9E5E5" }, { id: "C26", hex: "#3CAED8" }, { id: "C27", hex: "#D3DFFA" }, { id: "C28", hex: "#BBCFED" }, { id: "C29", hex: "#34488E" },
    { id: "C3", hex: "#A0E2FB" }, { id: "C4", hex: "#41CCFF" }, { id: "C5", hex: "#01ACEB" }, { id: "C6", hex: "#50AAF0" }, { id: "C7", hex: "#3677D2" },
    { id: "C8", hex: "#0F54C0" }, { id: "C9", hex: "#324BCA" }, { id: "D1", hex: "#AEB4F2" }, { id: "D10", hex: "#361851" }, { id: "D11", hex: "#B9BAE1" },
    { id: "D12", hex: "#DE9AD4" }, { id: "D13", hex: "#B90095" }, { id: "D14", hex: "#8B279B" }, { id: "D15", hex: "#2F1F90" }, { id: "D16", hex: "#E3E1EE" },
    { id: "D17", hex: "#C4D4F6" }, { id: "D18", hex: "#A45EC7" }, { id: "D19", hex: "#D8C3D7" }, { id: "D2", hex: "#858EDD" }, { id: "D20", hex: "#9C32B2" },
    { id: "D21", hex: "#9A009B" }, { id: "D22", hex: "#333A95" }, { id: "D23", hex: "#EBDAFC" }, { id: "D24", hex: "#7786E5" }, { id: "D25", hex: "#494FC7" },
    { id: "D26", hex: "#DFC2F8" }, { id: "D3", hex: "#2F54AF" }, { id: "D4", hex: "#182A84" }, { id: "D5", hex: "#B843C5" }, { id: "D6", hex: "#AC7BDE" },
    { id: "D7", hex: "#8854B3" }, { id: "D8", hex: "#E2D3FF" }, { id: "D9", hex: "#D5B9F8" }, { id: "E1", hex: "#FDD3CC" }, { id: "E10", hex: "#D33793" },
    { id: "E11", hex: "#FCDDD2" }, { id: "E12", hex: "#F78FC3" }, { id: "E13", hex: "#B5006D" }, { id: "E14", hex: "#FFD1BA" }, { id: "E15", hex: "#F8C7C9" },
    { id: "E16", hex: "#FFF3EB" }, { id: "E17", hex: "#FFE2EA" }, { id: "E18", hex: "#FFC7DB" }, { id: "E19", hex: "#FEBAD5" }, { id: "E2", hex: "#FEC0DF" },
    { id: "E20", hex: "#D8C7D1" }, { id: "E21", hex: "#BD9DA1" }, { id: "E22", hex: "#B785A1" }, { id: "E23", hex: "#937A8D" }, { id: "E24", hex: "#E1BCE8" },
    { id: "E3", hex: "#FFB7E7" }, { id: "E4", hex: "#E8649E" }, { id: "E5", hex: "#F551A2" }, { id: "E6", hex: "#F13D74" }, { id: "E7", hex: "#C63478" },
    { id: "E8", hex: "#FFDBE9" }, { id: "E9", hex: "#E970CC" }, { id: "F1", hex: "#FD957B" }, { id: "F10", hex: "#8A4526" }, { id: "F11", hex: "#5A2121" },
    { id: "F12", hex: "#FD4E6A" }, { id: "F13", hex: "#F35744" }, { id: "F14", hex: "#FFA9AD" }, { id: "F15", hex: "#D30022" }, { id: "F16", hex: "#FEC2A6" },
    { id: "F17", hex: "#E69C79" }, { id: "F18", hex: "#D37C46" }, { id: "F19", hex: "#C1444A" }, { id: "F2", hex: "#FC3D46" }, { id: "F20", hex: "#CD9391" },
    { id: "F21", hex: "#F7B4C6" }, { id: "F22", hex: "#FDC0D0" }, { id: "F23", hex: "#F67E66" }, { id: "F24", hex: "#E698AA" }, { id: "F25", hex: "#E54B4F" },
    { id: "F3", hex: "#F74941" }, { id: "F4", hex: "#FC283C" }, { id: "F5", hex: "#E7002F" }, { id: "F6", hex: "#943630" }, { id: "F7", hex: "#971937" },
    { id: "F8", hex: "#BC0028" }, { id: "F9", hex: "#E2677A" }, { id: "G1", hex: "#FFE2CE" }, { id: "G10", hex: "#D98C39" }, { id: "G11", hex: "#E0C593" },
    { id: "G12", hex: "#FFC890" }, { id: "G13", hex: "#B7714A" }, { id: "G14", hex: "#8D614C" }, { id: "G15", hex: "#FCF9E0" }, { id: "G16", hex: "#F2D9BA" },
    { id: "G17", hex: "#78524B" }, { id: "G18", hex: "#FFE4CC" }, { id: "G19", hex: "#E07935" }, { id: "G2", hex: "#FFC4AA" }, { id: "G20", hex: "#A94023" },
    { id: "G21", hex: "#B88558" }, { id: "G3", hex: "#F4C3A5" }, { id: "G4", hex: "#E1B383" }, { id: "G5", hex: "#EDB045" }, { id: "G6", hex: "#E99C17" },
    { id: "G7", hex: "#9D5B3E" }, { id: "G8", hex: "#753832" }, { id: "G9", hex: "#E6B483" }, { id: "H1", hex: "#FDFBFF" }, { id: "H10", hex: "#EEE9EA" },
    { id: "H11", hex: "#CECDD5" }, { id: "H12", hex: "#FFF5ED" }, { id: "H13", hex: "#F5ECD2" }, { id: "H14", hex: "#CFD7D3" }, { id: "H15", hex: "#98A6A8" },
    { id: "H16", hex: "#1D1414" }, { id: "H17", hex: "#F1EDED" }, { id: "H18", hex: "#FFFDF0" }, { id: "H19", hex: "#F6EFE2" }, { id: "H2", hex: "#FEFFFF" },
    { id: "H20", hex: "#949FA3" }, { id: "H21", hex: "#FFFBE1" }, { id: "H22", hex: "#CACAD4" }, { id: "H23", hex: "#9A9D94" }, { id: "H3", hex: "#B6B1BA" },
    { id: "H4", hex: "#89858C" }, { id: "H5", hex: "#48464E" }, { id: "H6", hex: "#2F2B2F" }, { id: "H7", hex: "#000000" }, { id: "H8", hex: "#E7D6DB" },
    { id: "H9", hex: "#EDEDED" }, { id: "M1", hex: "#BCC6B8" }, { id: "M10", hex: "#C5B2BC" }, { id: "M11", hex: "#9F7594" }, { id: "M12", hex: "#644749" },
    { id: "M13", hex: "#D19066" }, { id: "M14", hex: "#C77362" }, { id: "M15", hex: "#757D78" }, { id: "M2", hex: "#8AA386" }, { id: "M3", hex: "#697D80" },
    { id: "M4", hex: "#E3D2BC" }, { id: "M5", hex: "#D0CCAA" }, { id: "M6", hex: "#B0A782" }, { id: "M7", hex: "#B4A497" }, { id: "M8", hex: "#B38281" },
    { id: "M9", hex: "#A58767" }, { id: "P1", hex: "#FCF7F8" }, { id: "P10", hex: "#D9C7EA" }, { id: "P11", hex: "#F3ECC9" }, { id: "P12", hex: "#E6EEF2" },
    { id: "P13", hex: "#AACBEF" }, { id: "P14", hex: "#337680" }, { id: "P15", hex: "#668575" }, { id: "P16", hex: "#FEBF45" }, { id: "P17", hex: "#FEA324" },
    { id: "P18", hex: "#FEB89F" }, { id: "P19", hex: "#FFFEEC" }, { id: "P2", hex: "#B0A9AC" }, { id: "P20", hex: "#FEBECF" }, { id: "P21", hex: "#ECBEBF" },
    { id: "P22", hex: "#E4A89F" }, { id: "P23", hex: "#A56268" }, { id: "P3", hex: "#AFDCAB" }, { id: "P4", hex: "#FEA49F" }, { id: "P5", hex: "#EE8C3E" },
    { id: "P6", hex: "#5FD0A7" }, { id: "P7", hex: "#EB9270" }, { id: "P8", hex: "#F0D958" }, { id: "P9", hex: "#D9D9D9" }, { id: "Q1", hex: "#F2A5E8" },
    { id: "Q2", hex: "#E9EC91" }, { id: "Q3", hex: "#FFFF00" }, { id: "Q4", hex: "#FFEBFA" }, { id: "Q5", hex: "#76CEDE" }, { id: "R1", hex: "#D50D21" },
    { id: "R10", hex: "#FFDB4C" }, { id: "R11", hex: "#FFEBFA" }, { id: "R12", hex: "#D8D5CE" }, { id: "R13", hex: "#55514C" }, { id: "R14", hex: "#9FE4DF" },
    { id: "R15", hex: "#77CEE9" }, { id: "R16", hex: "#3ECFCA" }, { id: "R17", hex: "#4A867A" }, { id: "R18", hex: "#7FCD9D" }, { id: "R19", hex: "#CDE55D" },
    { id: "R2", hex: "#F92F83" }, { id: "R20", hex: "#E8C7B4" }, { id: "R21", hex: "#AD6F3C" }, { id: "R22", hex: "#6C372F" }, { id: "R23", hex: "#FEB872" },
    { id: "R24", hex: "#F3C1C0" }, { id: "R25", hex: "#C9675E" }, { id: "R26", hex: "#D293BE" }, { id: "R27", hex: "#EA8CB1" }, { id: "R28", hex: "#9C87D6" },
    { id: "R3", hex: "#FD8324" }, { id: "R4", hex: "#F8EC31" }, { id: "R5", hex: "#35C75B" }, { id: "R6", hex: "#238891" }, { id: "R7", hex: "#19779D" },
    { id: "R8", hex: "#1A60C3" }, { id: "R9", hex: "#9A56B4" }, { id: "T1", hex: "#FFFFFF" }, { id: "Y1", hex: "#FD6FB4" }, { id: "Y2", hex: "#FEB481" },
    { id: "Y3", hex: "#D7FAA0" }, { id: "Y4", hex: "#8BDBFA" }, { id: "Y5", hex: "#E987EA" }, { id: "ZG1", hex: "#DAABB3" }, { id: "ZG2", hex: "#D6AA87" },
    { id: "ZG3", hex: "#C1BD8D" }, { id: "ZG4", hex: "#96869F" }, { id: "ZG5", hex: "#8490A6" }, { id: "ZG6", hex: "#94BFE2" }, { id: "ZG7", hex: "#E2A9D2" },
    { id: "ZG8", hex: "#AB91C0" }
];
/**
 * 根据图片宽高比和建议总像素数，计算建议的行列数
 * @param {number} imgWidth - 图片宽度
 * @param {number} imgHeight - 图片高度
 * @param {number} targetTotal - 目标总块数（默认2500）
 * @returns {{cols: number, rows: number}}
 */
function suggestGridSize(imgWidth, imgHeight, targetTotal = 2500) {
    const ratio = imgWidth / imgHeight;
    let cols = Math.sqrt(targetTotal * ratio);
    let rows = Math.sqrt(targetTotal / ratio);
    cols = Math.min(100, Math.max(10, Math.round(cols)));
    rows = Math.min(100, Math.max(10, Math.round(rows)));
    // 如果宽高比极端，确保至少有一维达到边界（可选）
    return { cols, rows };
}
/**
 * 将十六进制颜色字符串转换为 RGB 对象
 * @param {string} hex - 格式如 "#RRGGBB" 或 "#RGB"
 * @returns {{r: number, g: number, b: number}}
 */
function hexToRgb(hex) {
    let h = hex.slice(1);
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const bigint = parseInt(h, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
/**
* 根据十六进制颜色判断色系（中文名称）
* @param {string} hex - 格式如 "#RRGGBB"
* @returns {string} 色系名称，如 "红色", "蓝色"
*/
function getColorCategory(hex) {
    const rgb = hexToRgb(hex);
    const r = rgb.r, g = rgb.g, b = rgb.b;

    // 计算色相（Hue）近似值，简化版
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
        if (max === r) hue = ((g - b) / delta) % 6;
        else if (max === g) hue = (b - r) / delta + 2;
        else hue = (r - g) / delta + 4;
        hue = Math.round(hue * 60);
        if (hue < 0) hue += 360;
    }

    // 饱和度、亮度辅助判断黑白灰
    const saturation = max === 0 ? 0 : delta / max;
    const brightness = max / 255;

    // 黑白灰特殊处理
    if (brightness < 0.15) return "黑色";
    if (brightness > 0.95 && saturation < 0.1) return "白色";
    if (saturation < 0.1) return "灰色";

    // 根据色相范围分类
    if (hue >= 0 && hue < 15) return "红色";
    if (hue >= 15 && hue < 35) return "橙色";
    if (hue >= 35 && hue < 65) return "黄色";
    if (hue >= 65 && hue < 150) return "绿色";
    if (hue >= 150 && hue < 200) return "青色";  // 青绿
    if (hue >= 200 && hue < 270) return "蓝色";
    if (hue >= 270 && hue < 330) return "紫色";
    if (hue >= 330 && hue < 360) return "粉色";

    // 兜底
    return "其他";
}
const colorPaletteWithRgb = COLOR_PALETTE.map(c => ({
    ...c,
    rgb: hexToRgb(c.hex),
    category: getColorCategory(c.hex)   // 添加色系名称
}));
/**
 * 根据色号 ID 获取完整的颜色信息（包含 RGB 和十六进制）
 * @param {string} id - 色号，如 "A1"
 * @returns {object} 匹配的颜色对象，若未找到则返回色板第一个颜色
 */
function getColorInfoFromId(id) {
    return colorPaletteWithRgb.find(c => c.id === id) || colorPaletteWithRgb[0];
}

// ========== DOM 元素绑定 ==========
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const triggerUploadBtn = document.getElementById('triggerUpload');
const gridColsSlider = document.getElementById('gridColsSlider');
const gridRowsSlider = document.getElementById('gridRowsSlider');
const colNumber = document.getElementById('colNumber');
const rowNumber = document.getElementById('rowNumber');
const colBadge = document.getElementById('colBadge');
const rowBadge = document.getElementById('rowBadge');
const totalPixelBadge = document.getElementById('totalPixelBadge');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');
const outputCanvas = document.getElementById('outputCanvas');
const infoMsg = document.getElementById('infoMsg');
const colorStatsArea = document.getElementById('colorStatsArea');
const statsGrid = document.getElementById('statsGrid');
const zoomSlider = document.getElementById('zoomSlider');
const zoomValue = document.getElementById('zoomValue');
const editModeBtn = document.getElementById('editModeBtn');

// 全局状态
let originalImage = null;           // 原始图片对象
let currentCols = 24, currentRows = 24;   // 当前网格行列数
let displayZoom = 1.0;              // 画布显示缩放系数
let isEditMode = false;             // 是否处于自定义编辑模式
let selectedCells = new Set();      // 存储选中格的键值 "row,col"
let customGridColors = null;        // 用户修改后的色号二维数组
let baseAutoGrid = null;            // 基于原始图片自动匹配的原始网格
let manuallyReplacedSet = new Set(); // 记录手动替换过的格子键值
let previewOverrides = new Map();    // 临时预览覆盖（悬浮选色时）
let currentColorPickerPanel = null;  // 当前打开的选色板 DOM 元素
let externalClickHandler = null;     // 全局点击关闭面板的处理器
let dragData = { isDragging: false, startX: 0, startY: 0, startLeft: 0, startTop: 0 };

/**
 * 显示提示信息
 * @param {string} text - 提示内容
 * @param {boolean} isError - 是否为错误信息（红色背景）
 */
function setInfo(text, isError = false) {
    infoMsg.innerHTML = isError ? `⚠️ ${text}` : `✨ ${text}`;
    infoMsg.style.background = isError ? "#ffe6e5" : "#eef2ff";
}

/**
 * 更新界面上的行列数显示及滑动条、输入框的值
 */
function updateGridUI() {
    colBadge.innerText = currentCols;
    rowBadge.innerText = currentRows;
    totalPixelBadge.innerHTML = `🧩 总像素块: ${currentCols * currentRows}`;
    if (colNumber.value != currentCols) colNumber.value = currentCols;
    if (rowNumber.value != currentRows) rowNumber.value = currentRows;
    if (gridColsSlider.value != currentCols) gridColsSlider.value = currentCols;
    if (gridRowsSlider.value != currentRows) gridRowsSlider.value = currentRows;
}

/**
 * 根据原图缩小采样，匹配最接近的色号，生成初始的色号网格
 * @param {number} cols - 列数
 * @param {number} rows - 行数
 * @returns {string[][]} 色号二维数组
 */
function getAutoGridColors(cols, rows) {
    const srcW = originalImage.width;
    const srcH = originalImage.height;

    const grid = Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = Array(cols);
        for (let j = 0; j < cols; j++) {

            // 计算这个格子在原图上的区域
            const cellW = srcW / cols;
            const cellH = srcH / rows;
            const x = j * cellW;
            const y = i * cellH;

            // 取该区域平均颜色（真正手动平均化）
            const avg = getAreaAverageColor(originalImage, x, y, cellW, cellH);

            // 平均色匹配色板
            let bestId = colorPaletteWithRgb[0].id;
            let minDist = Infinity;
            for (const color of colorPaletteWithRgb) {
                const dr = avg.r - color.rgb.r;
                const dg = avg.g - color.rgb.g;
                const db = avg.b - color.rgb.b;

                const dist = Math.sqrt(dr * dr + dg * dg + db * db);
                if (dist < minDist) {
                    minDist = dist;
                    bestId = color.id;
                }
            }
            grid[i][j] = bestId;
        }
    }
    return grid;
}

// 辅助：取矩形区域平均颜色
function getAreaAverageColor(img, x, y, w, h) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ctx1 = canvas.getContext('2d');
    canvas.width = 1;
    canvas.height = 1;
    const regions = [
        // 区域1：左上角
        { sx: x, sy: y, sw: w / 2, sh: h / 2 },
        // 区域2：左下角
        { sx: x, sy: y + h / 2, sw: w / 2, sh: h / 2 },
        // 区域3：右上角
        { sx: x + w / 2, sy: y, sw: w / 2, sh: h / 2 },
        // 区域4：右下角
        { sx: x + w / 2, sy: y + h / 2, sw: w / 2, sh: h / 2 },
    ];

    // 存储4个区域的颜色
    const colors = [];
    //中心区
    ctx1.clearRect(0, 0, 1, 1);
    ctx1.drawImage(
        img,
        x + w / 4, y + h / 4, w / 2, h / 2,
        0, 0, 1, 1
    );
    const pixel1 = ctx.getImageData(0, 0, 1, 1).data;
    // 遍历4个区域，分别采样颜色
    for (const region of regions) {
        // 清空画布
        ctx.clearRect(0, 0, 1, 1);
        // 绘制当前区域到1x1画布
        ctx.drawImage(
            img,
            region.sx, region.sy, region.sw, region.sh,
            0, 0, 1, 1
        );
        // 获取这个1x1像素的颜色数据
        const pixel = ctx.getImageData(0, 0, 1, 1).data;
        colors.push({
            r: pixel[0],
            g: pixel[1],
            b: pixel[2],
            a: pixel[3]
        });
    }

    // --------------------------
    // 计算 1、2、3、4 的 RGB 平均值
    // --------------------------
    let totalR = 0, totalG = 0, totalB = 0;
    let totalWeight = 0;

    for (const c of colors) {
        // 1. 计算当前区域的亮度（标准灰度公式）
        const brightness = (c.r * 0.299 + c.g * 0.587 + c.b * 0.114) / 255;

        // 2. 反转亮度 → 越暗权重越大（0~1）
        const weight = 0.3 + (1 - brightness) * 0.7;

        // 3. 加权累加
        totalR += c.r * weight;
        totalG += c.g * weight;
        totalB += c.b * weight;

        totalWeight += weight;
    }

    // 4. 计算最终加权平均值
    const avgR = Math.round((totalR / totalWeight) * 0.6 + pixel1[0] * 0.4);
    const avgG = Math.round((totalG / totalWeight) * 0.6 + pixel1[1] * 0.4);
    const avgB = Math.round((totalB / totalWeight) * 0.6 + pixel1[2] * 0.4);



    return { r: avgR, g: avgG, b: avgB };
}

/**
 * 根据当前行列数更新 baseAutoGrid（自动匹配网格）
 */
function updateBaseAutoGrid() {
    if (originalImage) baseAutoGrid = getAutoGridColors(currentCols, currentRows);
    else baseAutoGrid = null;
}

/**
 * 获取当前应该使用的网格（优先用户自定义网格，否则使用自动匹配网格）
 * @returns {string[][]} 色号二维数组
 */
function getCurrentGrid() {
    if (customGridColors && customGridColors.length === currentRows &&
        customGridColors[0].length === currentCols) return customGridColors;
    if (baseAutoGrid) return baseAutoGrid;
    return [];
}

/**
 * 核心绘制函数：将当前网格绘制到指定 canvas 上，支持高亮选中块、手动修改标记、每5格辅助线
 * @param {HTMLCanvasElement} targetCanvas - 目标画布
 * @param {Set} highlightSet - 需要高亮的格子键值集合
 * @param {number} zoom - 显示缩放系数
 * @returns {string[][]} 实际绘制的网格（用于统计）
 */
function drawPixelArt(targetCanvas = outputCanvas, highlightSet = selectedCells, zoom = displayZoom) {
    if (!originalImage || (!baseAutoGrid && !customGridColors)) return false;
    const cols = currentCols, rows = currentRows;
    let gridColorIds = getCurrentGrid();
    let baseBlockSize = Math.floor(1200 / cols);
    baseBlockSize = Math.min(baseBlockSize, Math.floor(1200 / rows));
    baseBlockSize = Math.max(16, baseBlockSize);
    let blockSize = Math.floor(baseBlockSize * zoom);
    blockSize = Math.max(16, blockSize);
    const sideMargin = Math.max(28, blockSize * 1.2);
    const topBottomMargin = Math.max(28, blockSize * 1.0);
    targetCanvas.width = sideMargin * 2 + cols * blockSize;
    targetCanvas.height = topBottomMargin * 2 + rows * blockSize;
    const ctx = targetCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#fefce8";
    ctx.fillRect(0, 0, targetCanvas.width, targetCanvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(sideMargin, topBottomMargin, cols * blockSize, rows * blockSize);

    ctx.font = `${Math.max(11, Math.min(blockSize * 0.32, 24))}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 绘制每个像素块
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = sideMargin + col * blockSize;
            const y = topBottomMargin + row * blockSize;
            let colorId = gridColorIds[row][col];
            const previewKey = `${row},${col}`;
            if (previewOverrides.has(previewKey)) colorId = previewOverrides.get(previewKey);
            const rgb = getColorInfoFromId(colorId).rgb;
            ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
            ctx.fillRect(x, y, blockSize, blockSize);
            ctx.strokeStyle = "rgba(0,0,0,0.08)";
            ctx.strokeRect(x, y, blockSize, blockSize);
            const brightness = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114);
            ctx.fillStyle = brightness > 140 ? "#1e1e2f" : "#ffffff";
            ctx.fillText(colorId, x + blockSize / 2, y + blockSize / 2);
            // 高亮选中的块（橙色边框）
            if (highlightSet && highlightSet.has(previewKey)) {
                ctx.save();
                ctx.strokeStyle = "#f97316";
                ctx.lineWidth = 3;
                ctx.strokeRect(x + 1, y + 1, blockSize - 2, blockSize - 2);
                ctx.restore();
            } else if (manuallyReplacedSet.has(previewKey)) {
                // 手动修改过的块显示绿色虚线边框
                ctx.save();
                ctx.strokeStyle = "#10b981";
                ctx.lineWidth = 2;
                ctx.setLineDash([4, 6]);
                ctx.strokeRect(x + 2, y + 2, blockSize - 4, blockSize - 4);
                ctx.restore();
            }
        }
    }

    // 绘制每5格黑色辅助线（水平+垂直）
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    for (let i = 5; i < rows; i += 5) {
        const y = topBottomMargin + i * blockSize;
        ctx.moveTo(sideMargin, y);
        ctx.lineTo(sideMargin + cols * blockSize, y);
    }
    for (let i = 5; i < cols; i += 5) {
        const x = sideMargin + i * blockSize;
        ctx.moveTo(x, topBottomMargin);
        ctx.lineTo(x, topBottomMargin + rows * blockSize);
    }
    ctx.stroke();
    ctx.restore();

    // 更新右侧统计面板（仅当绘制主画布时）
    if (targetCanvas === outputCanvas) {
        const countMap = new Map();
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const id = gridColorIds[row][col];
                countMap.set(id, (countMap.get(id) || 0) + 1);
            }
        }
        const statsArray = Array.from(countMap.entries())
            .map(([id, cnt]) => ({ id, count: cnt, hex: getColorInfoFromId(id).hex }))
            .sort((a, b) => a.id.localeCompare(b.id));
        if (statsArray.length) {
            colorStatsArea.style.display = "block";
            statsGrid.innerHTML = "";
            for (let stat of statsArray) {
                const card = document.createElement("div");
                card.className = "stat-card";
                const badge = document.createElement("div");
                badge.className = "stat-color-badge";
                badge.style.backgroundColor = stat.hex;
                const idSpan = document.createElement("span");
                idSpan.className = "stat-id";
                idSpan.textContent = stat.id;
                const cntSpan = document.createElement("span");
                cntSpan.className = "stat-count";
                cntSpan.textContent = `${stat.count} 个`;
                card.append(badge, idSpan, cntSpan);
                statsGrid.appendChild(card);
            }
        } else colorStatsArea.style.display = "none";
    }
    return gridColorIds;
}

/**
 * 将当前选中的像素块全部替换为指定色号，并清空选中状态
 * @param {string} colorId - 目标色号
 * @returns {boolean} 是否成功执行
 */
function applyReplaceSelectedWithColor(colorId) {
    if (!isEditMode || selectedCells.size === 0) return false;
    if (!customGridColors) {
        const auto = getAutoGridColors(currentCols, currentRows);
        customGridColors = auto.map(row => [...row]);
    }
    for (const key of selectedCells) {
        const [row, col] = key.split(',').map(Number);
        if (row < customGridColors.length && col < customGridColors[0].length) {
            customGridColors[row][col] = colorId;
            manuallyReplacedSet.add(key);
        }
    }
    drawPixelArt(outputCanvas, selectedCells, displayZoom);
    setInfo(`✅ 已将 ${selectedCells.size} 个像素块替换为 ${colorId}`);
    selectedCells.clear();
    closeColorPickerPanel();
    return true;
}

/**
 * 撤销当前选中块的自定义替换，恢复为原始自动匹配的色号
 * @returns {boolean} 是否成功撤销
 */
function undoSelectedReplacement() {
    if (!isEditMode || selectedCells.size === 0) {
        setInfo("没有选中任何像素块可撤销", true);
        return false;
    }
    if (!customGridColors) customGridColors = baseAutoGrid ? baseAutoGrid.map(row => [...row]) : null;
    if (!customGridColors) return false;
    let changed = 0;
    for (const key of selectedCells) {
        const [row, col] = key.split(',').map(Number);
        if (baseAutoGrid && row < baseAutoGrid.length && col < baseAutoGrid[0].length) {
            const originalId = baseAutoGrid[row][col];
            customGridColors[row][col] = originalId;
            manuallyReplacedSet.delete(key);
            changed++;
        }
    }
    if (changed) {
        drawPixelArt(outputCanvas, selectedCells, displayZoom);
        setInfo(`🔄 已撤销 ${changed} 个像素块的替换`);
    } else setInfo("所选块没有可撤销的修改", true);
    selectedCells.clear();
    closeColorPickerPanel();
    return true;
}

/**
 * 预览效果：将选中的块临时显示为指定色号（不实际保存）
 * @param {string} colorId - 预览色号
 */
function previewColorOnSelected(colorId) {
    for (const key of selectedCells) previewOverrides.set(key, colorId);
    drawPixelArt(outputCanvas, selectedCells, displayZoom);
}

/**
 * 清除所有预览覆盖，恢复真实颜色
 */
function clearPreview() {
    if (previewOverrides.size > 0) {
        previewOverrides.clear();
        drawPixelArt(outputCanvas, selectedCells, displayZoom);
    }
}

/**
 * 更新已存在的选色面板中的撤销按钮状态（根据当前选中块是否包含手动修改）
 */
function updatePickerPanelForSelection() {
    if (!currentColorPickerPanel) return;
    const hasReplaced = [...selectedCells].some(key => manuallyReplacedSet.has(key));
    const oldUndoBtn = currentColorPickerPanel.querySelector('.undo-selected-btn');
    if (oldUndoBtn) oldUndoBtn.remove();
    if (hasReplaced) {
        const undoBtn = document.createElement('button');
        undoBtn.textContent = '↩️ 撤销所选块替换';
        undoBtn.className = 'panel-action-btn undo-selected-btn';
        undoBtn.onclick = (e) => {
            e.stopPropagation();
            undoSelectedReplacement();
            closeColorPickerPanel();
        };
        const closeBtn = currentColorPickerPanel.querySelector('.panel-action-btn:last-child');
        if (closeBtn) currentColorPickerPanel.insertBefore(undoBtn, closeBtn);
        else currentColorPickerPanel.appendChild(undoBtn);
    }
}

/**
 * 调整选色面板的位置，使其不超出可视区域
 * @param {HTMLElement} panel - 面板元素
 * @param {number} mouseX - 鼠标X坐标
 * @param {number} mouseY - 鼠标Y坐标
 */
function adjustPanelPosition(panel, mouseX, mouseY) {
    const rect = panel.getBoundingClientRect();
    let left = mouseX + 15, top = mouseY + 15;
    if (left + rect.width > window.innerWidth) left = window.innerWidth - rect.width - 10;
    if (left < 10) left = 10;
    if (top + rect.height > window.innerHeight) top = window.innerHeight - rect.height - 10;
    if (top < 10) top = 10;
    panel.style.left = left + 'px';
    panel.style.top = top + 'px';
}

/**
 * 为选色面板添加拖动功能
 * @param {HTMLElement} panel - 面板元素
 */
function initDrag(panel) {
    const dragBar = panel.querySelector('.picker-drag-bar');
    if (!dragBar) return;
    dragBar.addEventListener('mousedown', (e) => {
        if (e.target.closest('.close-panel-btn')) return;
        e.preventDefault();
        dragData.isDragging = true;
        dragData.startX = e.clientX;
        dragData.startY = e.clientY;
        const left = parseInt(panel.style.left, 10);
        const top = parseInt(panel.style.top, 10);
        dragData.startLeft = isNaN(left) ? 0 : left;
        dragData.startTop = isNaN(top) ? 0 : top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    function onMouseMove(e) {
        if (!dragData.isDragging) return;
        const dx = e.clientX - dragData.startX, dy = e.clientY - dragData.startY;
        let newLeft = dragData.startLeft + dx, newTop = dragData.startTop + dy;
        newLeft = Math.min(window.innerWidth - panel.offsetWidth - 5, Math.max(5, newLeft));
        newTop = Math.min(window.innerHeight - panel.offsetHeight - 5, Math.max(5, newTop));
        panel.style.left = newLeft + 'px';
        panel.style.top = newTop + 'px';
    }
    function onMouseUp() {
        dragData.isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

/**
 * 关闭当前打开的选色面板，并移除全局点击监听
 */
function closeColorPickerPanel() {
    if (currentColorPickerPanel && currentColorPickerPanel.parentNode) {
        currentColorPickerPanel.remove();
        currentColorPickerPanel = null;
    }
    if (externalClickHandler) {
        document.removeEventListener('click', externalClickHandler);
        externalClickHandler = null;
    }
}

/**
 * 在光标位置显示选色面板（可搜索、可拖动、悬浮预览）
 * 如果面板已存在则不再新建，只更新撤销按钮
 * @param {MouseEvent} event - 触发事件的鼠标事件对象
 */
const enToZhColorMap = {
    'red': '红色', 'orange': '橙色', 'yellow': '黄色', 'green': '绿色',
    'cyan': '青色', 'blue': '蓝色', 'purple': '紫色', 'pink': '粉色',
    'brown': '棕色', 'gray': '灰色', 'grey': '灰色', 'black': '黑色', 'white': '白色'
};
function showColorPickerAtCursor(event) {
    if (!isEditMode || selectedCells.size === 0) return;
    if (currentColorPickerPanel) {
        updatePickerPanelForSelection();
        return;
    }
    const panel = document.createElement('div');
    panel.className = 'cursor-color-picker';
    const dragBar = document.createElement('div');
    dragBar.className = 'picker-drag-bar';
    dragBar.innerHTML = `<span><span class="drag-icon">⣿</span> 拼豆选色板 (输入色号或颜色类别)</span>
                     <button class="close-panel-btn" id="quickClosePanelBtn">✕</button>`;
    panel.appendChild(dragBar);
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 搜索色号 (不区分大小写)';
    searchInput.className = 'color-search-box';
    const colorContainer = document.createElement('div');
    colorContainer.className = 'color-grid-container';
    function renderColors(filter = '') {
        colorContainer.innerHTML = '';
        const lowerFilter = filter.toLowerCase().trim();
        // 如果没有搜索词，显示全部
        if (lowerFilter === null) {
            const filtered = [...colorPaletteWithRgb].sort((a, b) => a.id.localeCompare(b.id));
            for (let color of filtered) {
                // ... 创建元素代码不变 ...
            }
            return;
        }
        // 有搜索词：匹配色号ID 或 色系类别（支持中英文）
        let mappedZh = null;
        if (enToZhColorMap[lowerFilter]) {
            mappedZh = enToZhColorMap[lowerFilter];
        }

        const filtered = colorPaletteWithRgb.filter(c => {
            const idMatch = c.id.toLowerCase().includes(lowerFilter);
            const categoryMatch = c.category.toLowerCase().includes(lowerFilter);
            // 如果映射成功，检查色系是否精确匹配映射后的中文
            const mappedMatch = mappedZh ? c.category === mappedZh : false;
            return idMatch || categoryMatch || mappedMatch;
        }).sort((a, b) => a.id.localeCompare(b.id));

        for (let color of filtered) {
            // 创建每个颜色选项的代码（与原代码相同）
            const item = document.createElement('div');
            item.className = 'cursor-color-item';
            item.innerHTML = `<div class="cursor-color-swatch" style="background:${color.hex}"></div>
          <div class="cursor-color-id">${color.id}</div>
          <div style="font-size: 8px; color: #6b7280;">${color.category}</div>`;
            // 可以增加一个小的色系标签显示（可选）
            // 例如：item.innerHTML += `<div style="font-size:8px; color:#888;">${color.category}</div>`;
            item.onmouseenter = () => previewColorOnSelected(color.id);
            item.onmouseleave = () => clearPreview();
            item.onclick = (e) => {
                e.stopPropagation();
                applyReplaceSelectedWithColor(color.id);
                closeColorPickerPanel();
            };
            colorContainer.appendChild(item);
        }
    }
    searchInput.oninput = (e) => renderColors(e.target.value);
    renderColors('');
    panel.appendChild(searchInput);
    panel.appendChild(colorContainer);
    const hasReplaced = [...selectedCells].some(key => manuallyReplacedSet.has(key));
    if (hasReplaced) {
        const undoBtn = document.createElement('button');
        undoBtn.textContent = '↩️ 撤销所选块替换';
        undoBtn.className = 'panel-action-btn undo-selected-btn';
        undoBtn.onclick = (e) => {
            e.stopPropagation();
            undoSelectedReplacement();
            closeColorPickerPanel();
        };
        panel.appendChild(undoBtn);
    }
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ 关闭面板';
    closeBtn.className = 'panel-action-btn';
    closeBtn.style.marginTop = '8px';
    closeBtn.onclick = (e) => {
        e.stopPropagation();
        closeColorPickerPanel();
    };
    panel.appendChild(closeBtn);
    document.body.appendChild(panel);
    currentColorPickerPanel = panel;
    adjustPanelPosition(panel, event.clientX, event.clientY);
    initDrag(panel);
    const quickClose = panel.querySelector('#quickClosePanelBtn');
    if (quickClose) quickClose.onclick = (e) => { e.stopPropagation(); closeColorPickerPanel(); };
    externalClickHandler = (e) => {
        // 如果点击在画布上并且处于编辑模式，不关闭面板
        const isCanvasClick = (e.target === outputCanvas || outputCanvas.contains(e.target));
        if (currentColorPickerPanel && !currentColorPickerPanel.contains(e.target)) {
            if (isCanvasClick && isEditMode) {
                // 不关闭面板，让用户继续多选
                return;
            }
            closeColorPickerPanel();
        }
    };
    setTimeout(() => document.addEventListener('click', externalClickHandler), 30);
}

/**
 * 处理画布上的点击事件：选取/多选像素块，并唤起选色面板
 * @param {MouseEvent} e - 鼠标点击事件
 */
function handleCanvasClick(e) {
    if (!isEditMode || !originalImage) return;
    const rect = outputCanvas.getBoundingClientRect();
    const scaleX = outputCanvas.width / rect.width, scaleY = outputCanvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX, mouseY = (e.clientY - rect.top) * scaleY;
    let baseBlockSize = Math.floor(1200 / currentCols);
    baseBlockSize = Math.min(baseBlockSize, Math.floor(1200 / currentRows));
    baseBlockSize = Math.max(16, baseBlockSize);
    let blockSize = Math.floor(baseBlockSize * displayZoom);
    blockSize = Math.max(16, blockSize);
    const sideMargin = Math.max(28, blockSize * 1.2), topBottomMargin = Math.max(28, blockSize * 1.0);
    const gridLeft = sideMargin, gridTop = topBottomMargin;
    const gridWidth = currentCols * blockSize, gridHeight = currentRows * blockSize;
    if (mouseX >= gridLeft && mouseX <= gridLeft + gridWidth && mouseY >= gridTop && mouseY <= gridTop + gridHeight) {
        const col = Math.floor((mouseX - gridLeft) / blockSize);
        const row = Math.floor((mouseY - gridTop) / blockSize);
        if (row >= 0 && row < currentRows && col >= 0 && col < currentCols) {
            const key = `${row},${col}`;
            if (e.shiftKey) {
                if (selectedCells.has(key)) selectedCells.delete(key);
                else selectedCells.add(key);
            } else {
                if (selectedCells.has(key) && selectedCells.size === 1) selectedCells.clear();
                else { selectedCells.clear(); selectedCells.add(key); }
            }
            drawPixelArt(outputCanvas, selectedCells, displayZoom);
            if (selectedCells.size > 0) {
                if (currentColorPickerPanel) updatePickerPanelForSelection();
                else showColorPickerAtCursor(e);
            } else closeColorPickerPanel();
            return;
        }
    }
    selectedCells.clear();
    drawPixelArt(outputCanvas, selectedCells, displayZoom);
    closeColorPickerPanel();
}

/**
 * 退出自定义编辑模式，清除选中和面板
 */
function exitEditMode() {
    isEditMode = false;
    editModeBtn.classList.remove("active");
    editModeBtn.innerText = '✏️ 自定义编辑';
    selectedCells.clear();
    closeColorPickerPanel();
    drawPixelArt(outputCanvas, selectedCells, displayZoom);
    setInfo("已退出编辑模式");
}

/**
 * 进入自定义编辑模式，允许点击选择像素块并替换颜色
 */
function enterEditMode() {
    if (!originalImage) { setInfo("请先上传图片", true); return; }
    isEditMode = true;
    editModeBtn.classList.add("active");
    editModeBtn.innerText = '🚪 退出编辑';
    selectedCells.clear();
    closeColorPickerPanel();
    drawPixelArt(outputCanvas, selectedCells, displayZoom);
    setInfo("编辑模式：单击/Shift多选 → 弹窗选色（可拖动/搜索/预览/撤销）");
}

/**
 * 重置所有状态：清空图片、恢复默认行列、退出编辑模式
 */
function resetAll() {
    originalImage = null;
    customGridColors = null;
    baseAutoGrid = null;
    editModeBtn.innerText = '✏️ 自定义编辑';
    editModeBtn.classList.remove('active');
    manuallyReplacedSet.clear();
    previewOverrides.clear();
    selectedCells.clear();
    closeColorPickerPanel();
    if (isEditMode) exitEditMode();
    outputCanvas.width = 600;
    outputCanvas.height = 400;
    const ctx = outputCanvas.getContext('2d');
    ctx.fillStyle = "#eef2f8";
    ctx.fillRect(0, 0, 600, 400);
    ctx.fillStyle = "#5c6f87";
    ctx.font = "14px system-ui";
    ctx.fillText("📸 上传图片后自动预览", 300, 200);
    setInfo("已重置", false);
    colorStatsArea.style.display = "none";
}

/**
 * 从 File 对象加载图片，并初始化像素网格
 * @param {File} file - 图片文件
 */
function loadImageFromFile(file) {
    if (!file || !file.type.match('image.*')) { setInfo("请选择图片", true); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            originalImage = img;
            const { cols, rows } = suggestGridSize(img.width, img.height);
            document.getElementById('suggestCols').innerText = cols;
            document.getElementById('suggestRows').innerText = rows;
            //将建议值保存到全局，以便应用按钮使用
            window.suggestedCols = cols;
            window.suggestedRows = rows;

            customGridColors = null;
            manuallyReplacedSet.clear();
            previewOverrides.clear();
            selectedCells.clear();
            updateBaseAutoGrid();
            if (isEditMode) exitEditMode();
            drawPixelArt(outputCanvas, selectedCells, displayZoom);
            setInfo(`图片加载成功 ${img.width}x${img.height}`, false);
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}

/**
 * 下载当前画布为 PNG 图片
 */
function downloadCanvas() {
    if (!originalImage) { setInfo("无图片", true); return; }
    const link = document.createElement('a');
    const ts = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    link.download = `pixelart_${currentCols}x${currentRows}_${ts}.png`;
    link.href = outputCanvas.toDataURL('image/png');
    link.click();
    setInfo("下载成功", false);
}

/**
 * 当行列数发生变化时，重置自定义修改，重新生成自动网格并重绘
 */
function updateColsRows() {
    if (originalImage) {
        customGridColors = null;
        manuallyReplacedSet.clear();
        previewOverrides.clear();
        selectedCells.clear();
        updateBaseAutoGrid();
        drawPixelArt(outputCanvas, selectedCells, displayZoom);
    }
}

/**
 * 绑定所有界面交互事件（上传、滑块、按钮、画布点击等）
 */
function bindEvents() {
    triggerUploadBtn.onclick = () => fileInput.click();
    uploadArea.onclick = () => fileInput.click();
    fileInput.onchange = (e) => { if (e.target.files[0]) loadImageFromFile(e.target.files[0]); };
    resetBtn.onclick = resetAll;
    downloadBtn.onclick = downloadCanvas;
    editModeBtn.onclick = () => { if (isEditMode) exitEditMode(); else enterEditMode(); };
    zoomSlider.oninput = (e) => {
        displayZoom = parseFloat(e.target.value);
        zoomValue.innerText = displayZoom.toFixed(2);
        if (originalImage) drawPixelArt(outputCanvas, selectedCells, displayZoom);
    };
    function setCols(v) { let val = Math.min(100, Math.max(10, parseInt(v) || 10)); currentCols = val; updateGridUI(); updateColsRows(); }
    function setRows(v) { let val = Math.min(100, Math.max(10, parseInt(v) || 10)); currentRows = val; updateGridUI(); updateColsRows(); }
    colNumber.onchange = (e) => setCols(e.target.value);
    rowNumber.onchange = (e) => setRows(e.target.value);
    gridColsSlider.oninput = (e) => { currentCols = parseInt(e.target.value); updateGridUI(); updateColsRows(); };
    gridRowsSlider.oninput = (e) => { currentRows = parseInt(e.target.value); updateGridUI(); updateColsRows(); };
    outputCanvas.addEventListener('click', handleCanvasClick);
    uploadArea.addEventListener('dragover', e => e.preventDefault());
    uploadArea.addEventListener('drop', e => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.match('image.*')) loadImageFromFile(file);
        else setInfo("拖入图片文件", true);
    });
    const applyBtn = document.getElementById('applySuggestBtn');
    if (applyBtn) {
        applyBtn.onclick = () => {
            if (!originalImage) {
                setInfo("请先上传图片", true);
                return;
            }
            // 从全局存储或重新计算
            const { cols, rows } = suggestGridSize(originalImage.width, originalImage.height);
            currentCols = cols;
            currentRows = rows;
            updateGridUI();          // 更新滑块、输入框显示
            updateColsRows();        // 重置自定义修改并重绘
            setInfo(`已应用建议网格：${cols} x ${rows}`);
        };
    }
}

/**
 * 初始化整个应用：绑定事件、设置默认值、重置界面
 */
function init() {
    bindEvents();
    currentCols = 24; currentRows = 24; displayZoom = 1.0;
    zoomSlider.value = "1.0"; zoomValue.innerText = "1.0";
    updateGridUI();
    resetAll();
}
init();
