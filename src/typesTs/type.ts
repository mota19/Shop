export interface shopApiAllProductsResponse {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}

export type RootStackParamList = {
    Home: undefined;
    oneProduct: { id: number };
  };


export interface sort {
    label: string;
    onPress: () => void;
};

export interface chip {
    category?: string;
    onPress?: () => void;
    selected?: boolean;
}