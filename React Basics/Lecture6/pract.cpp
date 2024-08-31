#include <bits/stdc++.h>
using namespace std;

void solve(vector<vector<int>> &arr)
{
    int m = arr.size();
    int n = arr[0].size();

    vector<int> row(m, 0);
    vector<int> col(n, 0);

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (arr[i][j] == 0)
            {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (row[i] || col[j])
            {
                arr[i][j] = 0;
            }
        }
    }
}

int ncr(int n, int r)
{
    n = n - 1;
    r = r - 1;
    int res = 1;
    for (int i = 0; i < r; i++)
    {
        res = res * (n - i);
        res = res / (i + 1);
    }

    return res;
}

void getRow(int n)
{
    int res = 1;
    vector<int> ans;
    ans.push_back(res);
    for (int i = 1; i < n; i++)
    {
        res = res * (n - i);
        res = res / i;
        ans.push_back(res);
    }

    for (auto i : ans)
    {
        cout << i << " ";
    }
}

int maxSum(vector<int> arr)
{
    int maxi = INT_MIN;
    int sum = 0;
    for (int i = 0; i < arr.size(); i++)
    {
        sum += arr[i];
        maxi = max(sum, maxi);
        if (sum < 0)
            sum = 0;
    }
    return maxi;
}

void rotate(vector<vector<int>> &arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        for (int j = i + 1; j < arr[i].size(); j++)
        {
            swap(arr[i][j], arr[j][i]);
        }
    }
    for (int i = 0; i < arr.size(); i++)
    {
        reverse(arr[i].begin(), arr[i].end());
    }
}

void mergeInterval(vector<vector<int>> arr)
{
    vector<vector<int>> ans;
    sort(arr.begin(), arr.end());

    for (int i = 0; i < arr.size(); i++)
    {
        if (ans.size() == 0 || ans.back()[1] < arr[i][0])
        {
            ans.push_back(arr[i]);
        }
        else
        {
            ans.back()[1] = max(ans.back()[1], arr[i][1]);
        }
    }

    for (int i = 0; i < ans.size(); i++)
    {
        for (int j = 0; j < ans[i].size(); j++)
        {
            cout << ans[i][j] << " ";
        }
        cout << endl;
    }
}

int findDuplicate(vector<int> arr){
    int n = arr.size();
    vector<int> temp(n,0);
    int ans = 0;
    for(int i=0;i<n;i++){
        if(temp[arr[i]] == 0){
            temp[arr[i]] = 1;
        }
        else{
            ans = arr[i];
            break;
        }
    }
    return ans;
}

void rotateLeft(vector<int>arr, int k){
    k = k % arr.size();
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
    reverse(arr.begin(), arr.end());

    for(auto i:arr){
        cout << i << " ";
    }
}

int main()
{

    
    return 0;
}