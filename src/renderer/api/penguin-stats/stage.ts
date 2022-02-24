import request from 'renderer/utils/request/penguin-stats';


type Servers = 'CN' | 'US' | 'JP' | 'KR'

type Locales = 'zh' | 'en' | 'ja' | 'ko'

type StageTypes = 'MAIN' | 'SUB' | 'ACTIVITY' | 'DAILY'

type StageType = {
  stageType: StageTypes;
  stageId: string;
  zoneId: string;
  code: string;
  apCost: number;
  existence?: {
    [K in Servers]: {
      exist: boolean;
      openTime?: number;
      closeTime?: number;
    };
  };
  minClearTime: number;
  code_i18n: {
    [K in Locales]: string
  };
};

export async function GetAllStages(): Promise<StageType[]> {
  const response = await request.get('/stages');
  if (response && response.status === 200) {
    return response.data;
  }
  return [];
}

export async function GetStageById(stageId: string): Promise<StageType | null> {
  const response = await request.get(`/stages/${stageId}`);
  if (response && response.status === 200) {
    return response.data;
  }
  return null;
}
