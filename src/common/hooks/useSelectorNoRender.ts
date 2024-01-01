import { useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";

interface UseSelectorNoRenderProps {
  selectedStateValue: (state: RootState) => void;
  onChangeUpdate: (updatedStateEntity: any) => void;
}

export const useSelectorNoRender = ({
  selectedStateValue,
  onChangeUpdate,
}: UseSelectorNoRenderProps) => {
  useSelector(selectedStateValue, (_, entityValue) => {
    onChangeUpdate(entityValue);
    return true;
  });
  return onChangeUpdate;
};
