/**
 * demo页面的接口文档
 * 2018.2.26
 * author: whr
 */
export interface ListItem {
    id: number;
    title: string;
}

export interface DemoState {
    name: string;
    list: ListItem[];
}