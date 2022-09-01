export const flex = obj => `
    display: flex;
    flex-direction: ${obj?.direction ?? 'row'};
    justify-content: ${obj?.justify ?? 'center'};
    align-items: ${obj?.alignItem ?? 'center'};
  `;
