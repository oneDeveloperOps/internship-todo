class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        idx,s,e,res=0,0,len(nums)-1,nums[0]
        while(s<=e):
            mid=s+(e-s)//2
            if(res<nums[mid]):
                idx=mid
                res=nums[mid]
            if mid>0 and nums[mid-1]>nums[mid]:
                e=mid-1
            else:
                s=mid+1
        return idx