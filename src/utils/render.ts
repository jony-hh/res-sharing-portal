export const renderer = {
  /**
   * 标题解析为 TOC 集合, 增加锚点跳转
   *
   * @param text  标题内容
   * @param level 标题级别
   */
  heading(text: any, level: number): string {
    const realLevel = level
    return `<h${realLevel} id="${text}" class="common">${text}</h${realLevel}>`
  },

  /**
   * p标签格式
   *
   * @param text
   */
  paragraph(text: string): string{
    // 【样式：p标签自动换行】
    let style = 'word-break: break-all;word-wrap: break-word;'
    return `<p style="${style}">${"&nbsp&nbsp&nbsp&nbsp&nbsp"+text}</p>`
  }
}
