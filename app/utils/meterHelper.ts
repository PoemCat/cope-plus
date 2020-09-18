const splitRE = /[。，？！\n]/g;
// 平声
const LevelTones = '平';
// 仄声
const ObliqueTones = '仄';
// 可平可仄
const LevelOrObliqueTones = '中';
type ToneMode = 'normal' | 'special';
type RhythmBook = Record<string, string>;
type RhythmError =
  | { error: true; position: number; errorMsg: string }
  | { error: false };
function isOneLevelTones(
  toneLine: string,
  mode: ToneMode = 'normal',
  esay = true
): boolean {
  // 甲派王力定义
  if (mode === 'normal') {
    const allowTones = [LevelTones];
    esay && allowTones.push(LevelOrObliqueTones);
    return (
      toneLine
        .slice(0, -1)
        .split('')
        .filter((v) => allowTones.includes(v)).length === 1
    );
  }
  // 乙派启功定义
  if (mode === 'special') {
    const oneLevelToneStr = LevelTones + ObliqueTones + LevelTones;
    return toneLine.includes(oneLevelToneStr);
  }
  return false;
}

function isEndOfThreeLevelTones(toneLine: string): boolean {
  return toneLine.slice(toneLine.length - 3, toneLine.length) === '平平平';
}

function isInSameRhythm(
  rhythmWords: string[],
  rhythmBook: RhythmBook
): RhythmError {
  for (const [bookClass, bookWords] of Object.entries(rhythmBook)) {
    if (rhythmWords.every((word) => bookWords.includes(word))) {
      return {
        error: false,
      };
    }
  }
  return { errorMsg: '出韵', position: 0, error: true };
}

export function checkMeter(content: string) {
  const lines = content
    .replace(splitRE, '\n')
    .split('\n')
    .filter((v) => v.length && !v.startsWith('#'));
  const out = [];
  for (const line of lines) {
    console.log(line);
  }
}

export function timeOut() {}
