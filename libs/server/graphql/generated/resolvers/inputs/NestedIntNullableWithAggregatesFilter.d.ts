import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedIntNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _avg?: NestedFloatNullableFilter | undefined;
    _sum?: NestedIntNullableFilter | undefined;
    _min?: NestedIntNullableFilter | undefined;
    _max?: NestedIntNullableFilter | undefined;
}
