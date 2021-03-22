import { DictType } from '@/types/base'

export const FLOW_TYPES: DictType<string>[] = [
    { key: 'page1', label: '业务一' },
    { key: 'products', label: '产品' },
    { key: 'counsel', label: '顾问' }
]

export const FLOW_DATA = [
    {
        type: 'page1',
        title: '业务一',
        subTitle: '',
        seoTitle: '标准化服务流程-北京XXX公司',
        seoKeywords: '民商事诉讼标准化服务流程',
        seoDescription:'北京XXX公司，专注XXXX',
        content: []
    },
    {
        type: 'products',
        title: '产品',
        subTitle: '',
        seoTitle: '标准化服务流程-北京XXX公司',
        seoKeywords: '标准化服务流程',
        seoDescription:'北京XXX公司，专注XXXX',
        content: []
    },
    {
        type: 'counsel',
        title: '顾问',
        subTitle: '',
        seoTitle: '标准化服务流程-北京XXX公司',
        seoKeywords: '常年法律顾问标准化服务流程',
        seoDescription:'北京XXX公司，专注XXXX',
        content: []
    }
]
