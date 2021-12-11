import './type.d';

/**
 * 名前とあだ名の読みがな全てで、関連した情報に変換できる辞書データを作る
 * @param {string[]} yomiSet - 名前とあだ名の読み仮名セット
 * @param {string[]} kakiSet - 変換後語句のセット
 * @param {string} prefix - 変換時に使うプレフィックス記号
 * @returns - 辞書データのまとまり
 */
const setAlias = (yomiSet = [], kakiSet = [], prefix = '') => {
  const result = [];

  for (const yomi of yomiSet) {
    if (!yomi) {
      continue;
    }

    for (const kaki of kakiSet) {
      result.push({
        input: `${prefix}${yomi}`,
        output: kaki,
      });
    }
  }

  return result;
};

/**
 * 辞書データを整形
 * @param {LiverData} data
 */
export const format = (data) => {
  const { name, alias, marks, tags, fans, twitter } = data;
  /** 名前の読みと書き。各変換のよみとして利用される */
  const nameSet = (() => {
    const [nameYomi, nameKaki] = name;
    const _nameSet = {
      // フルネームと、スペース区切りで分けた値を処理するときに、名字がないパターンを想定して重複を処理
      yomi: [...new Set([
        nameYomi.replace(/\s/g, ''),
        ...nameYomi.split(/\s/),
      ])],
      kaki: [...new Set([
        nameKaki.replace(/\s/g, ''),
        ...nameKaki.split(/\s/),
      ])],
    };

    // あだ名の読みをnameに追加
    for (const [yomi, kaki] of alias) {
      _nameSet.yomi.push(yomi);
      // 読みと書きが同じ場合、書きが省略されることを考慮
      _nameSet.kaki.push(kaki || yomi);
    }

    return _nameSet;
  })();
  const dictionaryData = [];

  // 名前を辞書データに追加
  nameSet.yomi.forEach((yomi, idx) => {
    dictionaryData.push({
      input: yomi,
      output: nameSet.kaki[idx],
    });
  });

  // その他の値を辞書データに追加
  dictionaryData.push(...setAlias(nameSet.yomi, marks, '：'));
  dictionaryData.push(...setAlias(nameSet.yomi, tags, '＃'));
  dictionaryData.push(...setAlias(nameSet.yomi, fans, '〜'));
  dictionaryData.push(...setAlias(nameSet.yomi, twitter, '＠'));

  return dictionaryData;
};
